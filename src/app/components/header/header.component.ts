import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private _infoS:InformacionService ,private router:Router ) {
    
   }

 private buscarProducto( buscarTexto:string ){
  console.log(buscarTexto);
  this.router.navigate(['search', buscarTexto]);
 }

}
