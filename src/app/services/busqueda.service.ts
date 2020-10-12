import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private URL = 'https://customsearch.googleapis.com/customsearch/v1';
  private idMotor = '5c3ab6a4bb541a318';
  private apikey = 'AIzaSyDhtm0HLVF9HuUJdLjmkdYqbaVxItXHqKw';
  //private q;

  constructor(private http: HttpClient) { }

  
  getResults( consulta : string){
    const url = `${ this.URL }`;
    const params = new HttpParams()
      .set('key', this.apikey)
      .set('cx', this.idMotor)
      .set('q', consulta)
    return this.http.get<any>(url, { params });
  }

  buscarResult( consulta : string ){
    return this.getResults(`/v1?key=${ this.apikey }&cx=${ this.idMotor }&q=${ consulta }`);
  }
}
