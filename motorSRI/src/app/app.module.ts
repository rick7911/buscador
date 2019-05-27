import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routes';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PaginasComponent } from './paginas/paginas.component';
import { ControlComponent } from './admi/control/control.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    BuscadorComponent,
    PaginasComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
