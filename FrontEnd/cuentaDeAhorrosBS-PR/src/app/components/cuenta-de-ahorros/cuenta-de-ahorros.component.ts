import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';
import { CuentaDeAhorrosService } from 'src/app/services/cuentaDeAhorros/cuenta-de-ahorros.service';
import { Cliente } from 'src/app/modelo/Cliente';
import { CdkMonitorFocus } from '@angular/cdk/a11y';
import { clienteCuentaAhorro } from 'src/app/modelo/clienteCuentaAhorro';
import { CuentaAhorros } from 'src/app/modelo/CuentaAhorros';

@Component({
  selector: 'app-cuenta-de-ahorros',
  templateUrl: './cuenta-de-ahorros.component.html',
  styleUrls: ['./cuenta-de-ahorros.component.css']
})
export class CuentaDeAhorrosComponent implements OnInit {

  valorFiltro: string = '';
  estadoEmpleado: boolean = true;
  displayEditar: boolean = false;
  emailNuevoerror: boolean = true;
  emailAntiguoerror: boolean = true;
  expRCorreo = '/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3,4})+$/';
  displayCrear: boolean = false;
  displayContrato: boolean = false;

  cliente:Cliente={
    id:0,
    nombre:'',
    apellido:'',
    cedula:'',
    monto:0
  };

  cuentaAhorros:CuentaAhorros={
    id : 0,
    monto_inicial: 0,
    porct_interes_nomin :0.03,
    valores_mensuales:'', 
    id_cliente: 0
  };
  
  filtroEstado: string = 'Todos';
  filtroEstados: any[] = [{name: 'Todos'}, {name: 'Activos'}, {name: 'Inactivos'}];
  tiposUsuarios: any[] = [{name: 'Empleado'}, {name: 'Administrador de Unidad'}, {name: 'Administrador de Zona'}];  //faltan opciones

  cuentaClienteList:[]=[];

  constructor(private messages: MessageService,private cuentaDeAhorrosService:CuentaDeAhorrosService,) { }


  ngOnInit(): void {
    this.cargarCuentasAhorros();
  }

  calculateNomina(mount:number, time:number , interes:number ): string {
    const values:number[] = [];
    for (let i = 1; i < time; i++) {
      const nomina :number = Number((mount*(1+(i/12)* interes)).toFixed(2));
        values.push(nomina);
    }
    return values.toString();
  }

  crearCuentaCliente(){

  let valoreMensuales=this.calculateNomina(this.cliente.monto,13,this.cuentaAhorros.porct_interes_nomin);

  let clienteAhorro : clienteCuentaAhorro={
      nombre: this.cliente.nombre,
      apellido: this.cliente.apellido,
      cedula: this.cliente.cedula,
      monto_inicial :this.cliente.monto,
      porct_interes_nomin :0.03,
      valores_mensuales: valoreMensuales,	
  }    

  this.cuentaDeAhorrosService.postCrearCuentaCliente(clienteAhorro).subscribe((x:any)=>{   
    console.log('objectResult',x)
  })

  this.cuentaDeAhorrosService.postCliente(this.cliente).subscribe((x:any)=>{   
    console.log('objectResult',x)
  })

  this.messages.add({
    key: 'login',
    severity: 'success',
    summary: 'Inicio de Sesión',
    detail: 'Bienvenido :3'
  });

  }

  cargarCuentasAhorros(){    
    this.cuentaDeAhorrosService.getCuentasCliente().subscribe((x:any)=>{   
      console.log('objectResult',x)
      this.cuentaClienteList=x;
    })
  }

  controlarCorreo(tipo: string) {
  }

  onFileSelected(event: any) {
  }

}
