import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private URL = 'https://customsearch.googleapis.com/customsearch/v1';
  private idMotor = '5c3ab6a4bb541a318';
  private apikey = 'AIzaSyAyFmmsFTZQbhNU5Ew4VamA5fN62KbycQU';
  //private q;

  constructor(private http: HttpClient) { }

  getResults(){
    const url = `${ this.URL }`;
    const params = new HttpParams()
      .set('key', this.apikey)
      .set('cx', this.idMotor)
      .set('q', 'lectures')
    return this.http.get<any>(url, { params });
  }
}
