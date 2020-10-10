import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private searh: BusquedaService ) { }

  ngOnInit(): void {
  }

  buscar(){
    return this.searh.getResults;
  }

}
