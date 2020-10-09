import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { observable, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasServiceService {



  constructor(private http: HttpClient) { }

  getNoticias(){
    
    return this.http.get<any>('http://newsapi.org/v2/top-headlines?country=us&apiKey=87b987ff91b543fab3dc3b1938e6a634&category=general&pageSize=9');
  }
}
