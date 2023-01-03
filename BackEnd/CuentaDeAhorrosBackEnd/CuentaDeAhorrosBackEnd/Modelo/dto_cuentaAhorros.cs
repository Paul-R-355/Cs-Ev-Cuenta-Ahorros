using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CuentaDeAhorrosBackEnd.Modelo
{
    public class dto_cuentaAhorros
    {
        public int id { get; set; }
        public float monto_ahorro { get; set; }
        public float monto_mes_uno { get; set; }
        public float monto_mes_dos { get; set; }
        public float monto_mes_tres { get; set; }
        public float monto_mes_cuatro { get; set; }
        public float monto_mes_cinco { get; set; }
        public float monto_mes_seis { get; set; }
        public float monto_mes_siete { get; set; }
        public float monto_mes_ocho { get; set; }
        public float monto_mes_nueve { get; set; }
        public float monto_mes_diez { get; set; }
        public float monto_mes_once { get; set; }
        public float monto_mes_doce { get; set; }
        public int id_cliente { get; set; }
    }
}
