using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CuentaDeAhorrosBackEnd.Modelo
{
    public class dto_cliente
    {
        [Key]
        public int id { get; set; }
        public string cedula { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
    }
}
