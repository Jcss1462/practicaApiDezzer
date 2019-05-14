import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/api';


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  results: any = [];


  query: string = "";

  constructor(private artistService: ArtistsService) {

  }

  ngOnInit() {
  }


  search() {

    this.results=[];

    this.artistService.get(this.query).subscribe((data) => {


      for (let i = 0; i < data["data"].length; i++) {
        const artist = data["data"][i];
        artist["cover"]=data["data"][i]["album"].cover_small;
        artist["artista"]=data["data"][i]["artist"].name;
        this.results.push(artist);
      }

    });

    console.log(this.results);

  }

  updateQuery(e) {

    this.query = e.target.value;
  }

  redirect(e){
    window.location.replace(e);
  }

}
