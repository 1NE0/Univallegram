import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  items : [] = [];
  primerElemento : any;
  segundoElemento : any;
  tercerElemento : any;
  cuartoElemento : any;
  //objBusqueda;
  
  constructor( private search: BusquedaService ) { }

  mostrarResp( consulta : string ){
    console.log(consulta);

    this.search.getResults(consulta)
    .subscribe(respuesta =>{
      console.log(respuesta.items);
      this.items = respuesta.items;
      this.primerElemento = respuesta.items[0].pagemap.cse_thumbnail[0];
      this.segundoElemento = respuesta.items[1].pagemap.cse_thumbnail[0];
      // this.tercerElemento = respuesta.items[2].pagemap.cse_thumbnail[0];
      // this.cuartoElemento = respuesta.items[3].pagemap.cse_thumbnail[0];
    });

    

  }

}
