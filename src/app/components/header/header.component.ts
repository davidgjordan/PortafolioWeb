import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public  _infoS:InformacionService ,private router:Router ) {
    
   }

 public buscarProducto( buscarTexto:string ){
  this.router.navigate(['search', buscarTexto]);
 }

}
