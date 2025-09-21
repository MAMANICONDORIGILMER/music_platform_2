# Solución para Error de CORS

## El problema
Tu aplicación React (http://localhost:3000) no puede conectarse a tu API .NET Core (http://localhost:5248) debido a políticas de CORS.

## Solución: Configurar CORS en .NET Core

### 1. En tu archivo `Program.cs` o `Startup.cs`, agrega la configuración de CORS:

#### Para .NET 6+ (Program.cs):
```csharp
var builder = WebApplication.CreateBuilder(args);

// Agregar servicios
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ⭐ AGREGAR CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")  // URL de tu React app
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// ⭐ USAR CORS (debe ir ANTES de UseAuthorization)
app.UseCors("AllowReactApp");

app.UseAuthorization();
app.MapControllers();

app.Run();
```

#### Para .NET 5 y anteriores (Startup.cs):
```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    
    // ⭐ AGREGAR CORS
    services.AddCors(options =>
    {
        options.AddPolicy("AllowReactApp", policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        });
    });
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.UseRouting();
    
    // ⭐ USAR CORS (debe ir ANTES de UseAuthorization)
    app.UseCors("AllowReactApp");
    
    app.UseAuthorization();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

### 2. Reinicia tu servidor .NET Core
```bash
Ctrl+C  # Para detener
dotnet run  # Para reiniciar
```

## Política CORS más permisiva (solo para desarrollo)
Si necesitas una configuración más permisiva para desarrollo:

```csharp
services.AddCors(options =>
{
    options.AddPolicy("DevelopmentPolicy", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Y luego usar:
app.UseCors("DevelopmentPolicy");
```

## Verificación
Después de configurar CORS, deberías ver en la respuesta HTTP headers como:
- `Access-Control-Allow-Origin: http://localhost:3000`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
- `Access-Control-Allow-Headers: *`

## Orden importante en el pipeline
El `app.UseCors()` DEBE ir:
- ✅ DESPUÉS de `app.UseRouting()`
- ✅ ANTES de `app.UseAuthorization()`
- ✅ ANTES de `app.MapControllers()`