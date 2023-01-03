using Microsoft.EntityFrameworkCore.Migrations;

namespace CuentaDeAhorrosBackEnd.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "dto_Cliente",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cedula = table.Column<string>(type: "nvarchar(50)",nullable: true),
                    nombre = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    apellido = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dto_Cliente", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "dto_Cliente");
        }
    }
}
