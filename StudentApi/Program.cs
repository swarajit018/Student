var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:61453")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// app.UseHttpsRedirection();

app.UseCors("AllowAngular");

app.MapGet("/api/student", () =>
{
    return new[]
    {
        new
        {
            Id = 1,
            Name = "Ravi",
            City = "Hyderabad"
        },
        new
        {
            Id = 2,
            Name = "Kiran",
            City = "Chennai"
        }
    };
});

app.Run();