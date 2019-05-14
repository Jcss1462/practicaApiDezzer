import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';

import {ArtistsService} from './services/Artists/artists.service'
//modulo cliente html
import { HttpClientModule } from '@angular/common/http';
import { CancionesComponent } from './canciones/canciones.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    CancionesComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
