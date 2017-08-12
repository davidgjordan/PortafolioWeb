import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductoService {


  public productos:any[]=[];
  public cargandoProductos:boolean  = true;

  constructor(private http:Http) {
    this.cargarProductos();
   }


   public cargarProductos(){
       this.cargandoProductos  = true;

     //if( this.productos.length == 0 ){
        this.http.get("https://paginawebportafolio-4ceec.firebaseio.com/productos_idx.json")
              .subscribe( res => {
                console.log(res.json());
                this.cargandoProductos = false;
                this.productos = res.json();
              });
   // }
   }

}
