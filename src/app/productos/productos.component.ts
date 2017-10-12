import { Component } from '@angular/core';

@Component({
  selector: '.app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent { 
  productos: any[] = [
    {
      "id":"1", "nombre":"PC ASUS","descripcion":"Ordenador tipo torre, marca ASUS","precio":"499.99"
    },
    {
      "id":"2", "nombre":"Monitor Samsung","descripcion":"Monitor Full HD, marca Samsung","precio":"159.99"
    },
    {
      "id":"3", "nombre":"Smartphone HUAWEI","descripcion":"HUAWEI GX8, con Android 6.0","precio":"299.99"
    },
    {
      "id":"4", "nombre":"TV LG","descripcion":"TV OLED, marca LG","precio":"599.99"
    },
    {
      "id":"5", "nombre":"Altavoces Energy System","descripcion":"Altavoces Dolby Surround, marca Energy System","precio":"239.99"
    },
    {
      "id":"6", "nombre":"Smartphone Samsung","descripcion":"Samsung S7 Edge Plus","precio":"699.99"
    }
  ];
  modelo: any[]=[{
    "id":"-", "nombre":"-","descripcion":"-","precio":"-"
  }];

  crearProducto(){
    this.productos = this.productos.concat(this.modelo);
  }
  editarProducto(i){
    document.getElementById("editar").setAttribute("style","display:block;");
    document.getElementById("idProducto").setAttribute("value",i+1);
    document.getElementById("nombre").setAttribute("value",this.productos[i].nombre);
    document.getElementById("descripcion").setAttribute("value",this.productos[i].descripcion);
    document.getElementById("precio").setAttribute("value",this.productos[i].precio);
  }
  eliminarProducto(i){
    this.productos.splice(i,1);
    return false;
  }
}