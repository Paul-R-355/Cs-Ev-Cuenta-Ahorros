using CuentaDeAhorrosBackEnd.Modelo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CuentaDeAhorrosBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentaAhorrosController : Controller
    {
        private readonly AplicationDbContext _context;

        public CuentaAhorrosController(AplicationDbContext context)
        {
            _context = context;
        }

        //GET: CuentaAhorrosController
        public ActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        [Route("set-list-controler")]
        public ActionResult CrearCuentaAhorros(string nombre, string apellido, string cedula)
        //public ActionResult CrearCuentaAhorros()
        {
            if (ModelState.IsValid) 
            {
                SqlConnection conexion = (SqlConnection)_context.Database.GetDbConnection();
                SqlCommand cmd = conexion.CreateCommand();
                conexion.Open();

                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "sp_listar_cuentas";
                cmd.Parameters.Add("@nombre", System.Data.SqlDbType.NVarChar,50).Value=nombre;
                cmd.Parameters.Add("@apellido", System.Data.SqlDbType.NVarChar, 50).Value = apellido;
                cmd.Parameters.Add("@cedula", System.Data.SqlDbType.NVarChar, 50).Value = cedula;
                cmd.ExecuteNonQuery();//por no devolver datos
                conexion.Close();
                return new EmptyResult();
            }
            return View();
        }


        [HttpPost]
        [Route("set-list")]
        public Object CrearCuentaAhorrosALT()
        //public ActionResult CrearCuentaAhorros()
        {
            
            if (ModelState.IsValid)
            {
                SqlConnection conexion = (SqlConnection)_context.Database.GetDbConnection();
                SqlCommand cmd = conexion.CreateCommand();
                conexion.Open();

                //cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "select* from dto_Cliente";
                SqlDataReader reader = cmd.ExecuteReader();

                var l =reader.Read();

                conexion.Close();
                return l;
            }
            return null;
        }

        [HttpPost]
        [Route("set-list-alt")]
        public Object CrearCuentaAhorrosALTT()
        //public ActionResult CrearCuentaAhorros()
        {
            List<string> listDeclaredElsewhere = new List<string>();
            
            if (ModelState.IsValid)
            {
                

                SqlConnection conexion = (SqlConnection)_context.Database.GetDbConnection();
                SqlCommand cmd = conexion.CreateCommand();
                conexion.Open();                
                cmd.CommandText = "select* from dto_Cliente";
                
                SqlDataReader reader = cmd.ExecuteReader();
                List<dto_cliente> clients = new List<dto_cliente>();

                while (reader.Read())
                {

                    dto_cliente client = new dto_cliente
                    {
                        id = Convert.ToInt32(reader[0].ToString()),
                        cedula = (reader[1].ToString()),
                        nombre = (reader[2].ToString()),
                        apellido = (reader[3].ToString()),
                        
                    };

                    clients.Add(client);

                }
                conexion.Close();

                return clients;
            }
            return null;
        }


        [HttpPost]
        [Route("get-cuentas")]
        public Object GetCuentaAhorro()
        //public ActionResult CrearCuentaAhorros()
        {            
            if (ModelState.IsValid)
            {


                SqlConnection conexion = (SqlConnection)_context.Database.GetDbConnection();
                SqlCommand cmd = conexion.CreateCommand();
                conexion.Open();

                //cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "exec [sp_get_cuentas_ahorros]";

                SqlDataReader reader = cmd.ExecuteReader();
                List<dto_cuentaCliente> clients = new List<dto_cuentaCliente>();

                while (reader.Read())
                {                    
                    List<string> valores_mensuales_ind = (reader[6].ToString()).Split(new char[] { ',' }).ToList();

                    dto_cuentaCliente cuenta_cliente = new dto_cuentaCliente
                    {
                        id = Convert.ToInt32(reader[0].ToString()),
                        cedula = (reader[1].ToString()),
                        nombre = (reader[2].ToString()),
                        apellido = (reader[3].ToString()),
                        monto_inicial = Convert.ToDouble(reader[4].ToString()),
                        porct_interes_nomin = Convert.ToDouble(reader[5].ToString()),
                        valores_mensuales = valores_mensuales_ind,
                    };

                    clients.Add(cuenta_cliente);

                }

                return clients;
            }
            return null;
        }

     
    }
}
