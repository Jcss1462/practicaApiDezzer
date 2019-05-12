import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/api';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {


  results: any = [];
  repetidos: any = [];
  prueba: Boolean = true;


  query: string = "";

  constructor(private artistService: ArtistsService) {

  }

  ngOnInit() {
  }


  search() {

    this.results = [];
    this.repetidos = [];


    this.artistService.get(this.query).subscribe((data) => {

      console.log(data);

      for (let i = 0; i < data["data"].length; i++) {
        const artist = data["data"][i]["artist"];

        this.repetidos.forEach(element => {

          if (element == artist.name) {

            this.prueba = false;

          }

        });

        if (this.prueba == true) {
          this.results.push(artist);
          this.repetidos.push(artist.name);
        }else{
          this.prueba=true;
        }
      }

    });

  }

  updateQuery(e) {

    this.query = e.target.value;
  }

  redirect(e) {
    window.location.replace(e);
  }

}
