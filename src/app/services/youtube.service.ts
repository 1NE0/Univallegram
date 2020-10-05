import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // HttpParams : Con este modulo se logra que 
                                                               // la Url no se sature con tantos parametros.
import { YoutubeResponse } from '../models/youtube/youtube.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBzbYGhXM2hNkqnQilNnffBvVI4QYvfRIw ';
  private playList  = 'UUg6F1zZrC7W2MgBVVQvhUgA';
  private nexPageToken = '';

  constructor( private http: HttpClient ) { }

  // Funcion para obtener los videitos del canal, llamando la url por partes por medio de la const params.
  getVideos(){
    const url = `${ this.youtubeUrl }/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '4')
      .set('playlistId', this.playList)
      .set('key',this.apiKey)
    return this.http.get<YoutubeResponse>( url, { params })
      .pipe(
        map(resp =>{
          this.nexPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map ( items => items.map(video => video.snippet ))
      )
  }
}
