namespace BlazorSSR.Components.Pages;
public partial class Home
{
    [SupplyParameterFromForm]
    private User vm { get; set; } = new();

    public async Task Submit(EditContext editContext)
    {
        Task.Delay(500).Wait();
    }
}

class User
{
    public string FullName { get; set; }
    public string BirthDate { get; set; }
}