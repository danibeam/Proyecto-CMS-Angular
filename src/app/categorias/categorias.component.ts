import { Component } from '@angular/core';

@Component({
  selector: '.app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent { 
  categorias: any[]=[
    {
      "id":"1","nombre":"Televisores","productos":"1"
    },
    {
      "id":"2","nombre":"Smartphones","productos":"2"
    },
    {
      "id":"3","nombre":"Perifericos","productos":"2"
    },
    {
      "id":"4","nombre":"Ordenadores","productos":"1"
    }
  ];
  modelo: any[]=[{
    "id":this.categorias.length+1, "nombre":"Nueva Categoria","productos":"0"
  }];
  crearCategoria(){
    this.categorias = this.categorias.concat(this.modelo);
  }
  editarCategoria(i){
    document.getElementById("editarCategoria").setAttribute("style","display:block;");
    document.getElementById("idCategoria").setAttribute("value",i+1);
    document.getElementById("nombreCategoria").setAttribute("value",this.categorias[i].nombre);
    document.getElementById("productosCategoria").setAttribute("value",this.categorias[i].productos);
  }
  eliminarCategoria(i){
    this.categorias.splice(i,1);
    return false;
  }
}