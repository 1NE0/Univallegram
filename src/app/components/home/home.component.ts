import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube/youtube.module'; // importamos la interfaz.
import swal from'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ] 
})
export class HomeComponent implements OnInit {

  videos : Video[] = [];

  constructor( private servicioYoutube : YoutubeService ) { }

  /* Verificamos que nos obtenga el arreglo con los videos del canal.
  ngOnInit(): void {
    this.servicioYoutube.getVideos()
    .subscribe(respuesta =>{
      console.log(respuesta);
    });
  }*/

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos(){
    this.servicioYoutube.getVideos()
    .subscribe(resp =>{
      this.videos.push(...resp);
      console.log(resp);
    });
  }

  // ${ video.resourceId.. } Nos carga el id al que le damos clic
  mostrarVideo( video : Video ){
    swal.fire({
      html:
            `
            <h4>${ video.title }</h4>
            <hr>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/${ video.resourceId.videoId }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
    })
  }
}
