import { Component, OnInit } from '@angular/core';
import { WeatherMapService } from '../../services/weather-map.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  // para almacenar los datos temporalmente
  weather;

  constructor( private Mapa: WeatherMapService) { }

  // .subscribe es un metodo que se ejecuta luego de la funcion "obtenerClima" y puede
  // devolver un error o los datos que se esperan.
  ngOnInit(): void {}

  getClima(cityName: string, countryCode: string){
    this.Mapa.obtenerClima(cityName, countryCode)
      .subscribe(resp =>{
        this.weather = resp
      },
    )
  }

  submit(cityName : HTMLInputElement, countryCode: HTMLInputElement){
    //console.log(cityName.value,countryCode.value)
    if(cityName.value && countryCode.value){
      this.getClima(cityName.value, countryCode.value);

      // para que el form se resetee, y que quede el cursor en el primer campo.
      cityName.value = '';
      countryCode.value = '';
    }else{
      alert('Por favor, inserte valores validos.');
    }

    cityName.focus();
    return false; // para que no recargue la pag cada vez que se de al boton
  }

}
