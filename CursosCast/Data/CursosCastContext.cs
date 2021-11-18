using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CursosCast.Model;

namespace CursosCast.Data
{
    public class CursosCastContext : DbContext
    {
        public CursosCastContext (DbContextOptions<CursosCastContext> options)
            : base(options)
        {
        }

        public DbSet<CursosCast.Model.Curso> Curso { get; set; }

        public DbSet<CursosCast.Model.Categoria> Categoria { get; set; }

        public DbSet<CursosCast.Model.Log> Log { get; set; }
        public DbSet<CursosCast.Model.Usuario> Usuario { get; set; }
    }
}
