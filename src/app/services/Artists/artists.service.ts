import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { headers } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  /**artist={
    id: null,
    name:"",
    link: "",
    picture_small:""
  }
  */

  constructor(private http: HttpClient) { }

  get(query){
    console.log(query);
    console.log(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`);
    return this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,{headers})
  }
}
