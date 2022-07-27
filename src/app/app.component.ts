import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //En el modelo tenemos definido un objeto llamado art con tres propiedades:
  art={
    codigo:0 ,
    descripcion:"",
    precio:0
  }
  //Definimos en el modelo (app.component.ts) un vector de objetos llamado 'articulos' y almacenamos 5 elementos:
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];
//Llamamos al método 'hayRegistros()' que retorna true o false dependiendo si el vector tiene o 
//no componentes:
  hayRegistros() {
    return this.articulos.length>0;              
  }
  //Cuando se presiona el botón de borrar se ejecuta el método 'borrar':
  borrar(codigo:number) {
    //Recorremos el vector y controlamos uno a uno el código del artículo 
    //seleccionado con cada uno de los elementos del vector.
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==codigo)
      {
        //El que coincide lo eliminamos del vector llamando al método splice 
        //indicando la posición y cuantas componentes borrar a partir de ese.
        this.articulos.splice(x,1);
        return;
      }
  }
  //Al presionar el botón agregar se ejecuta el método 'agregar':
  agregar() {
    if (this.art.codigo==0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    //Primero recorremos el vector articulos para comprobar si hay algún otro artículo 
    //con el mismo código. 
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }  
    //En el caso que no exista procedemos a añadir un nuevo elemento llamando al método push 
    //y pasando un objeto que creamos en dicho momento con los datos almacenados en el objeto 
    //'art' que se encuentra enlazado con el formulario.      
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    //Luego asignamos cero y cadena vacía a todas las propiedades del objeto art con el objetivo 
    //de borrar todos los 'input' del formulario.                     
    this.art.codigo=0;
    this.art.descripcion="";	
    this.art.precio=0;    
  }
  //Cuando se presiona el botón de seleccionar se ejecuta el método 'seleccionar':
  //Lo único que hacemos es actualizar el objeto art del modelo con el artículo 
  //que acaba de seleccionar el operador (llega como parámetro el artículo seleccionado)
  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }
  //Cuando presiona el botón de modificación se ejecuta el método:
  modificar() {
    //Buscamos el código de articulo del control 'input' dentro del vector, 
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
    //en caso de encontrarlo procedemos a modificar la descripción y precio.
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}