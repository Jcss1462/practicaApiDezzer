import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  private id: string;
  results: any = [];

  constructor(private artistService: ArtistsService,private router: Router) { 

    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
    this.search();
  }

  
  ngOnInit() {
  }

  search() {

    this.results = [];

    this.artistService.getArtist(this.id).subscribe((data) => {

      this.results=data;
      
      console.log(this.results);

    });

  }

  redirect(){
    window.location.replace(this.results.link);
  }


}
