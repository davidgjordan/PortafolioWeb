import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent implements OnInit {
  public producto:any = undefined;
  private cod:string =undefined;

  constructor(private route:ActivatedRoute, public _productoS:ProductoService) {
    route.params.subscribe( parametros =>{
      console.log(parametros['id']);
      _productoS.getItem(parametros['id']).subscribe(

        res=>{
          this.cod = parametros['id'];
          this.producto = res.json();
          console.log(this.producto);
        }
      );
    });
   }

  ngOnInit() {
  }

}
