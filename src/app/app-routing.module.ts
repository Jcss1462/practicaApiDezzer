import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistsComponent} from './artists/artists.component'
import {CancionesComponent} from './canciones/canciones.component';
import {ArtistComponent} from './artist/artist.component';

const routes: Routes = [
  {path: '', redirectTo: '/artistas', pathMatch: 'full'},
  {path: 'artistas', component: ArtistsComponent },
  {path: 'canciones', component: CancionesComponent },
  {path: 'artista', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
