

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents();
builder.Services.AddMudServices(); // MudBlazor
// App Services
var appServices = typeof(Program).Assembly.GetTypes().Where(s => s.Name.EndsWith("Service") && s.IsInterface == false).ToList();
foreach (var appService in appServices)
    builder.Services.Add(new ServiceDescriptor(appService, appService, ServiceLifetime.Scoped));


var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseAntiforgery();
app.MapStaticAssets();
app.MapRazorComponents<App>();
app.Run();