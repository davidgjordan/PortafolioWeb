import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  public info:any = {};
  public cargada:boolean = false;

  constructor(private http:Http) { 
    http.get("assets/data/info.pagina.json").subscribe( 
      (data) =>{
        console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      }
    );
  }

}
