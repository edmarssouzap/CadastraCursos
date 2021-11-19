using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CursosCast.Model
{
    public class Log
    {
        [Key]
        public int LogId { get; set; }
        
        [Required(ErrorMessage = "Incluir a data de inclusao do log")]
        public DateTime DataInclusao { get; set; }

        [Required(ErrorMessage = "Incluir a ação que foi realizada para o log")]
        public string Acao { get; set; }
    }
}
