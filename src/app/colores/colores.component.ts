import { Component } from '@angular/core';

@Component({
  selector: '.app-colores',
  templateUrl: './colores.component.html'
})
export class ColoresComponent { 
  colores: any[]=[
    {
      "id":"1","nombre":"Rojo","codigo":"#FF0000","productos":"4"
    },
    {
      "id":"2","nombre":"Azul","codigo":"#0000FF","productos":"2"
    },
    {
      "id":"3","nombre":"Amarillo","codigo":"#FFFF00","productos":"3"
    },
    {
      "id":"4","nombre":"Verde","codigo":"#00FF00","productos":"5"
    },
    {
      "id":"5","nombre":"Rosa","codigo":"#FA58AC","productos":"1"
    },
    {
      "id":"6","nombre":"Naranja","codigo":"#FF4000","productos":"3"
    },
    {
      "id":"7","nombre":"Negro","codigo":"#000000","productos":"4"
    }
  ];
  modelo: any[]=[{
    "id":this.colores.length+1, "nombre":"Nuevo Color","codigo":"#000000","productos":"0"
  }];
  crearColor(){
    this.colores = this.colores.concat(this.modelo);
  }
  editarColor(i){
    document.getElementById("editarColor").setAttribute("style","display:block;");
    document.getElementById("idColor").setAttribute("value",i+1);
    document.getElementById("nombreColor").setAttribute("value",this.colores[i].nombre);
    document.getElementById("productos").setAttribute("value",this.colores[i].productos);
  }
  eliminarColor(i){
    this.colores.splice(i,1);
    return false;
  }
}