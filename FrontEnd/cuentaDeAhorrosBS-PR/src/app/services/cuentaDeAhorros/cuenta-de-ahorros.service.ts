import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SettingsService } from '../core/settings/settings.service';
import { UrlRoutes } from 'src/app/shared/routes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuentaDeAhorrosService {

  constructor(private client:HttpClient,private setting:SettingsService) { }

  postCliente(cliente:any){
    let headers = new HttpHeaders({
      'Content-type':'application/json',
      accept: 'application/json'      
    });
    return this.client.post(UrlRoutes.post_cliente,cliente,{headers: headers}).pipe(map((x:any)=>x.objectResult)).toPromise();
  }


}
