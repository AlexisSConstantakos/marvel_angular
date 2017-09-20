import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8aba97ba7fb823a0a5161d4ae62b4427&hash=4d3b5d4c6b77d873b3396c9b0594124a";

  constructor(private http: Http) { }

  getCharacters(searchTerm: string): Observable<any> {

    let url = this.baseUrl + "&limit=50";

    if(searchTerm){
      url = this.baseUrl + "&nameStartsWith=" + searchTerm;
    }

    return this.http.get(url)
      .map(result => {
        return result.json()
      })

  }
}