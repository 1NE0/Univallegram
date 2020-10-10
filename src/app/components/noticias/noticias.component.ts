import { Component, OnInit } from '@angular/core';
import { NoticiasServiceService } from '../../services/noticias-service.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticiasL : any;

  constructor(private noticias: NoticiasServiceService) { 

  }

  ngOnInit() {
    this.noticias.getNoticias().subscribe(response => {
      console.log(response.articles);
      this.noticiasL = response.articles;
      });
  }
  
  

}
