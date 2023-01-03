import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaDeAhorrosComponent } from './components/cuenta-de-ahorros/cuenta-de-ahorros.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {KeyFilterModule} from 'primeng/keyfilter';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule, MatHint} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {SelectButtonModule} from "primeng/selectbutton";
import { MessageService } from 'primeng/api';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CuentaDeAhorrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    KeyFilterModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    ConfirmPopupModule,
    SelectButtonModule,
    HttpClientModule,
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
