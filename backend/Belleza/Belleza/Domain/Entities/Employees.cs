namespace Belleza.Domain.Entities
{
    public class Employee
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public string Skills { get; set; } = string.Empty;
    }
}