using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Belleza.Domain.Entities
{
    public class Quotes
    {
        [Key]
      public  int Id { get; set; }
        [ForeignKey(nameof(IdEmployee))]
        public int IdEmployee { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int IdService { get; set; }
        [Required]
        public DateTime AppointmentDate { get; set; }



    }
}
