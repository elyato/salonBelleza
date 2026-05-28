using Microsoft.AspNetCore.Mvc;

namespace Belleza.Controllers.Employees
{
    public class EmployeerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
