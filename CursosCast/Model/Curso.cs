using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursosCast.Model
{
    public class Curso
    {
        [Key]
        public int CursoId { get; set; }
        [Required]
        public string Nome { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFinal { get; set; }
        [Required]
        public string DesAssunto { get; set; }
        public int CatId { get; set; }

        public virtual Categoria Categoria { get; set; }
    }
}
