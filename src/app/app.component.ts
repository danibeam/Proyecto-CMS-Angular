import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS';
  cliente = 'NitsNets';

  respuestaProductos(){
    document.getElementsByClassName('app-categorias')[0].setAttribute("style","display:none;");
    document.getElementsByClassName('app-colores')[0].setAttribute("style","display:none;");
    document.getElementsByClassName('app-productos')[0].setAttribute("style","display:block;");
  }
  respuestaCategorias(){
    document.getElementsByClassName('app-productos')[0].setAttribute("style","display:none;");
    document.getElementsByClassName('app-colores')[0].setAttribute("style","display:none;");
    document.getElementsByClassName('app-categorias')[0].setAttribute("style","display:block;");
  }
  respuestaColores(){
    document.getElementsByClassName('app-productos')[0].setAttribute("style","display:none;");
    document.getElementsByClassName('app-categorias')[0].setAttribute("style","display:none;");
    document.getElementsByClassName('app-colores')[0].setAttribute("style","display:block;");
  }
}
