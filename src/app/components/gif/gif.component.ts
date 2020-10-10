import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GifsService } from '../../services/gifs.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent{

  searchTerm: string;

  @HostListener('window:scroll')
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.giphyService.next();
    }
  }

  constructor(public giphyService: GifsService) { }

  search() {
    this.giphyService.search(this.searchTerm);
  }

}
