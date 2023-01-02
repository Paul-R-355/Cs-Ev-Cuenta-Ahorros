import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaDeAhorrosComponent } from './components/cuenta-de-ahorros/cuenta-de-ahorros.component';

const routes: Routes = [
  {path: 'CuentaDeAhorros', component: CuentaDeAhorrosComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
