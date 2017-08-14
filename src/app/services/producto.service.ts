import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductoService {


  public productos: any[] = [];
  public productosSearch: any[] = [];
  public cargandoProductos: boolean = true;


  constructor(private http: Http) {
    this.cargarProductos();
  }


  public cargarProductos() {
    this.cargandoProductos = true;
    let promesa = new Promise((resolve, reject) => {

      this.http.get("https://paginawebportafolio-4ceec.firebaseio.com/productos_idx.json")
        .subscribe(res => {
          this.cargandoProductos = false;
          this.productos = res.json();
          //cuando termine de ejecutarse lo q queremos llamamos a la funcion
          //resolve o sea si todo sale bien
          resolve();
        });
    });

    return promesa;
  }


  public getItem(codigoItem: string) {
    return this.http.get("https://paginawebportafolio-4ceec.firebaseio.com/productos/" + codigoItem + ".json");

  }

  public buscarItem(termino: string) {

    if (this.productos.length == 0) {
      this.cargarProductos().then(() => {
        ///termino la carga de los productos en el metodo de arriba
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);

    }

  }

  private filtrarProductos(termino: string) {
    this.productosSearch = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      //si el termino a buscar conincide con la categoria del producto 
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ){
        this.productosSearch.push(prod);
      }

    });
  }

}
