import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardsCursosComponent } from './cards-cursos/cards-cursos.component';
import { LiveComponent } from './components/live/live.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { GifComponent } from './components/gif/gif.component';
import { FormsModule } from '@angular/forms';
import { CreditosComponent } from './components/creditos/creditos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsCursosComponent,
    LiveComponent,
    HomeComponent,
    NoticiasComponent,
    MapaComponent,
    GifComponent,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
