import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items : [] = [];
  objBusqueda;
  

  constructor( private search: BusquedaService ) { }

  ngOnInit(): void {
    this.mostrarResp();
  } 

  mostrarResp(){
    this.search.getResults()
    .subscribe(respuesta =>{
      console.log(respuesta.items);
      this.objBusqueda = respuesta.items
    });
  }

  buscar(consulta : string){
    if(consulta){
      this.mostrarResp();
    }
  }
}
