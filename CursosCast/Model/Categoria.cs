using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursosCast.Model
{
    public class Categoria
    {
        [Key]
        public int CatId { get; set; }
        [Required]
        public string Nome { get; set; }
    }
}
