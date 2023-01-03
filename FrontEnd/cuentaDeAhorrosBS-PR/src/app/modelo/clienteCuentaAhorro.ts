import { Cliente } from './Cliente';
import { CuentaAhorros } from './CuentaAhorros';

export interface clienteCuentaAhorro {             
    nombre: string;
    apellido: string;
    cedula: string;    
	monto_inicial :number,
	porct_interes_nomin :number,
	valores_mensuales: string,	
  }


  