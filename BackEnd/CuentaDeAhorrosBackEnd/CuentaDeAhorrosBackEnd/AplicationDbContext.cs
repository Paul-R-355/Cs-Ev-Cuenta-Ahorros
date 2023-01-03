using CuentaDeAhorrosBackEnd.Modelo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CuentaDeAhorrosBackEnd
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }

        public DbSet<dto_cliente> dto_Cliente
        {
            get; set;
        }
    }
}
