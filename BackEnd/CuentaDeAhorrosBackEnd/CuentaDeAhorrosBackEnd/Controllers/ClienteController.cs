using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CuentaDeAhorrosBackEnd;
using CuentaDeAhorrosBackEnd.Modelo;
using Microsoft.Data.SqlClient;

namespace CuentaDeAhorrosBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ClienteController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cliente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<dto_cliente>>> Getdto_Cliente()
        {
            return await _context.dto_Cliente.ToListAsync();
        }

        // GET: api/Cliente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<dto_cliente>> Getdto_cliente(int id)
        {
            var dto_cliente = await _context.dto_Cliente.FindAsync(id);

            if (dto_cliente == null)
            {
                return NotFound();
            }

            return dto_cliente;
        }

        // PUT: api/Cliente/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putdto_cliente(int id, dto_cliente dto_cliente)
        {
            if (id != dto_cliente.id)
            {
                return BadRequest();
            }

            _context.Entry(dto_cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!dto_clienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cliente
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<dto_cliente>> Postdto_cliente(dto_cliente dto_cliente)
        {
            _context.dto_Cliente.Add(dto_cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getdto_cliente", new { id = dto_cliente.id }, dto_cliente);
        }

        // DELETE: api/Cliente/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<dto_cliente>> Deletedto_cliente(int id)
        {
            var dto_cliente = await _context.dto_Cliente.FindAsync(id);
            if (dto_cliente == null)
            {
                return NotFound();
            }

            _context.dto_Cliente.Remove(dto_cliente);
            await _context.SaveChangesAsync();

            return dto_cliente;
        }

        private bool dto_clienteExists(int id)
        {
            return _context.dto_Cliente.Any(e => e.id == id);
        }

        [HttpPost]
        [Route("set-cuenta-ahorros")]
        public ActionResult CrearCuentaAhorros(string json)
        //public ActionResult CrearCuentaAhorros()
        {
            if (ModelState.IsValid)
            {
                SqlConnection conexion = (SqlConnection)_context.Database.GetDbConnection();
                SqlCommand cmd = conexion.CreateCommand();
                conexion.Open();

                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.CommandText = "sp_create_plan_ahorros";
                cmd.Parameters.Add("@json", System.Data.SqlDbType.NVarChar, int.MaxValue).Value = json;
                cmd.ExecuteNonQuery();//por no devolver datos
                conexion.Close();
                return new EmptyResult();//por no devolver datos 200 ok
            }
            return new EmptyResult();
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
