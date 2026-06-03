using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Belleza.Domain.Entities
{
    public class Quotes
    {
        [Key]
        int Id { get; set; }
        [ForeignKey(nameof(IdEmployee))]
        int IdEmployee { get; set; }
        [Required]
        string Phone { get; set; }
        [Required]

        string Name { get; set; }
        [Required]

        int IdService { get; set; }
        [Required]
        DateTime AppointmentDate { get; set; }



    }
}
