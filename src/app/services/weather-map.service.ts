import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherMapService {

  private apiKey = '0b912fa3861931aecf3fdabee1ee3757';
  private URL: string = '';

  constructor( private http : HttpClient) {
    this.URL = `http://api.openweathermap.org/data/2.5/weather?appid=${ this.apiKey }&units=metric&q=`;
   }

  // Con eto, ya estamos obteniendo los datos. Me devuelve el obj Json, es decir el resultado de la URL
  obtenerClima( nombreCiudad: string, codPais:string ){
    return this.http.get(`${ this.URL }${nombreCiudad}, ${codPais}`);
   }
}
