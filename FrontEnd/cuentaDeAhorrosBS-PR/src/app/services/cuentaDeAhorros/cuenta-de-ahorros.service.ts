import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlRoutes } from 'src/app/shared/routes';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/modelo/Cliente';
import { Observable } from 'rxjs';

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


}
