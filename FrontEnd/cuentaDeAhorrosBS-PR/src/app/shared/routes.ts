import { environment } from '../environments/environment';

export class UrlRoutes{
    public static post_cliente:string =`${environment.urlApiBase}/api/Cliente`;
    public static post_cliente_cuenta:string =`${environment.urlApiBase}/api/Cliente/set-cuenta-ahorros`;
    public static get_cuentas_clientes:string =`${environment.urlApiBase}/api/Cliente/get-cuentas`;    
}