using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursosCast.Model
{
    public class Conta
    {
        [Key]
        public int ContaId { get; set; }
        [Required]
        public string Usuario { get; set; }
        [Required]
        public string Senha { get; set; }
        public string Tipo { get; set; }
        public string Status { get; set; }
    }
}
