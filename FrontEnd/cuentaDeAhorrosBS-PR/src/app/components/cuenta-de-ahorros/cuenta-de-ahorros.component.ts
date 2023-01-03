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
  displayCrear: boolean = false;  
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
    console.log('postCrearCuentaCliente',x)
  })

  this.messages.add({
    key: 'login',
    severity: 'success',
    summary: 'Registro Exitoso!',
    detail: 'Guardado exitosamente'
  });
  this.limpiarCampos()
  }

  limpiarCampos(){
    
    this.cliente={
      id:0,
      nombre:'',
      apellido:'',
      cedula:'',
      monto:0
    };    

    this.cuentaClienteList=[];
    this.cargarCuentasAhorros()
    this.displayCrear = false;    
  }

  cargarCuentasAhorros(){    
    this.cuentaDeAhorrosService.getCuentasCliente().subscribe((x:any)=>{
      
      for (let i = 0; i < x.length; i++) {
        x[i] = {    
            ...x[i],    
            valores_mensuales:this.createValues(x[i].valores_mensuales)    
        }    
      }          
      this.cuentaClienteList=x;      
    })    
  }
  
  createValues(dates:any){
    const a = [];

      let valMensual = {
      "Primer_Monto":dates[0],

      "Segundo_Monto":dates[1],

      "Tercero_Monto":dates[2],

      "Cuarto_Monto":dates[3],

      "Quinto_Monto":dates[4],

      "Sexto_Monto":dates[5],

      "Septimo_Monto":dates[6],

      "Octavo_Monto":dates[7],

      "Noveno_Monto":dates[8],

      "Decimo_Monto":dates[9],

      "Onceavo_Monto":dates[10],

      "Doceavo_Monto":dates[11],
    }
    a.push(valMensual)
    return a
  }



}
