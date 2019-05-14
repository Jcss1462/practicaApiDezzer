import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss']
})
export class CancionComponent implements OnInit {

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

    this.artistService.getCancion(this.id).subscribe((data) => {

      this.results=data; 
      console.log(this.results);

    });

  }

  redirectPage(){
    window.location.replace(this.results.link);
  }

  redirectPreview(){
    window.location.replace(this.results.preview);
  }

}
