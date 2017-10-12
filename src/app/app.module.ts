import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Terceros
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ColoresComponent } from './colores/colores.component';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CategoriasComponent,
    ColoresComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
