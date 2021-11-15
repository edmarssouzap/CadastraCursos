using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursosCast.Model
{
    public class Turma
    {
        [Key]
        public int TurmaId { get; set; }
        [Required]
        public string Nome { get; set; }
        
        #nullable enable
        public int? QtdAlunos { get; set; }
    }
}
