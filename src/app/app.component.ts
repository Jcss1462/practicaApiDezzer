import { Component } from '@angular/core';
import { ArtistsService } from './services/Artists/artists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  artist = {};

  constructor(private artistService: ArtistsService){ }

  updateName(e){

    //this.artistService.artist.name=e.target.value;

  }

}
