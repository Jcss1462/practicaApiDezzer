export  var API_key ='8eed2d4e7bmshb1e5e4a2c5c6d5cp18f53bjsncc677a1cd9d2'
export  var API_HOST ='deezerdevs-deezer.p.rapidapi.com'


import {ArtistsService} from './Artists/artists.service'

//cabeceras para poder usar los servicios
import{HttpHeaders} from '@angular/common/http';

export{

    ArtistsService

};

export var headers= new HttpHeaders();
headers= headers.set('X-RapidAPI-Host',`${API_HOST}`);
headers= headers.set('X-RapidAPI-Key',`${API_key}`);
