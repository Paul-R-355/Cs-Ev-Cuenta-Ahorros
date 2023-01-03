using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CuentaDeAhorrosBackEnd.Modelo
{
    public class dto_cuentaCliente
    {
        public int id { get; set; }
        public string cedula { get; set; }
        public string nombre{ get; set; }
        public string apellido{ get; set; }
        public Double monto_inicial { get; set; }
        public Double porct_interes_nomin { get; set; }
        public List<string> valores_mensuales { get; set; }

    }
}
