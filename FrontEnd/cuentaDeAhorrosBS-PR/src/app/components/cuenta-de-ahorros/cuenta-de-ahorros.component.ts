import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';
import { CuentaDeAhorrosService } from 'src/app/services/cuentaDeAhorros/cuenta-de-ahorros.service';
import { Cliente } from 'src/app/modelo/Cliente';

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

  personalNuevo: Usuario = {
    nombre: '',
    apellido: '',
    telefono:'',
    pais: '',
    identificacion: '',
    correo:'',
    sisHabilitado: true,
    foto: '',
    fechaCreacion: new Date(),
    fechaModificacion: new Date(),
    tipoUsuario: '',
    id: '',
    id_contrato: '',
  };

  personalAntiguo: Usuario = {
    nombre: '',
    apellido: '',
    telefono:'',
    pais: '',
    identificacion: '',
    correo:'',
    sisHabilitado: false,
    foto: '',
    fechaCreacion: new Date(),
    fechaModificacion: new Date(),
    tipoUsuario: '',
    id: '',
    id_contrato: '',
  };


  personal: Usuario[] = [];
  filtroEstado: string = 'Todos';
  filtroEstados: any[] = [{name: 'Todos'}, {name: 'Activos'}, {name: 'Inactivos'}];
  tiposUsuarios: any[] = [{name: 'Empleado'}, {name: 'Administrador de Unidad'}, {name: 'Administrador de Zona'}];  //faltan opciones

  constructor(private messages: MessageService,private cuentaDeAhorrosService:CuentaDeAhorrosService,) { }


  ngOnInit(): void {
    
  }

  crearPersonal() {
   
    const cli:Cliente={
      id:0,
      nombre:'Pablo',
      apellido:'Robles',
      cedula:'1728394657'
    };

    this.cuentaDeAhorrosService.postCliente(cli).subscribe((x:any)=>{   
        console.log('objectResult',x)
    })
    //this.displayCrear = true; 

    this.messages.add({
      key: 'login',
      severity: 'success',
      summary: 'Inicio de Sesión',
      detail: 'Bienvenido :3'
    });
  }

  controlarCorreo(tipo: string) {
    if(tipo === 'n') {
      let re: RegExp = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (re.exec(this.personalNuevo.correo)){
        this.emailNuevoerror = false;
      } else {
        this.emailNuevoerror = true;
      }
    } else {
      let re: RegExp = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (re.exec(this.personalAntiguo.correo)){
        this.emailAntiguoerror = false;
      } else {
        this.emailAntiguoerror = true;
      }
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    let filePath = '';
    if (this.personalAntiguo.nombre !== '') {
      filePath = this.personalAntiguo.nombre.toString() + ' foto';
    } else {
      filePath = this.personalNuevo.nombre.toString() + ' foto';
    }
  }

}
