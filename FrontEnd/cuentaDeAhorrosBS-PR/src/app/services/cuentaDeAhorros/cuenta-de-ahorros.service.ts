import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UrlRoutes } from 'src/app/shared/routes';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/modelo/Cliente';
import { Observable } from 'rxjs';
import { clienteCuentaAhorro } from 'src/app/modelo/clienteCuentaAhorro';

@Injectable({
  providedIn: 'root'
})
export class CuentaDeAhorrosService {

  constructor(private httpclient:HttpClient) { }

  postCliente(cliente:Cliente):Observable<Cliente>{
    let headers = new HttpHeaders({
      'Content-type':'application/json',
      accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',    
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    });

    return this.httpclient.post<Cliente>(UrlRoutes.post_cliente,cliente,{headers:headers})
  }

  postCrearCuentaCliente(clienteCuenta:clienteCuentaAhorro):Observable<Cliente>{
    let headers = new HttpHeaders({
      'Content-type':'application/json',
      accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',    
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    });

    let json=JSON.stringify(clienteCuenta);

    let params = new HttpParams();
    params = params.append('json',json);    
    return this.httpclient.post<Cliente>(UrlRoutes.post_cliente_cuenta,'{}',{headers:headers,params:params})
  }

  getCuentasCliente():Observable<Cliente>{
    let headers = new HttpHeaders({
      'Content-type':'application/json',
      accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',    
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    });
    return this.httpclient.post<Cliente>(UrlRoutes.get_cuentas_clientes,'{}',{headers:headers})
  }
  


}
