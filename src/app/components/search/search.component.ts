import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {


  private termino:string = undefined;

  constructor(private route:ActivatedRoute, private _productoS:ProductoService) { 

    route.params.subscribe( parametros =>{

      this.termino = parametros['termino'];

      this._productoS.buscarItem(this.termino);
    });
  }

}
