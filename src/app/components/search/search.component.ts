import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  items : [] = [];
  //objBusqueda;
  
  constructor( private search: BusquedaService ) { }

  /*ngOnInit( ): void {
    this.mostrarResp(consulta);
  }*/ 

  mostrarResp( consulta : string ){
    console.log(consulta);

    this.search.getResults(consulta)
    .subscribe(respuesta =>{
      console.log(respuesta.items);
      this.items = respuesta.items;
    });
  }

}
