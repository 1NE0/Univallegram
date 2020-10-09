import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiveComponent } from './components/live/live.component';
import { MapaComponent } from './components/mapa/mapa.component';

export const routes: Routes = [
  { path: 'live', component: LiveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mapa', component: MapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
