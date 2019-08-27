import { Injectable } from '@angular/core';
import {googlesearchservice } from './google.serarch.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // tslint:disable-next-line: max-line-length
  private apiurl = 'https://www.googleapis.com/customsearch/v1?cx=005314277313817109837%3Aznkkmtgnwyq&key=AIzaSyBJ-DvSxYno0czZGbsIRJqb2hULIopEPus&q=';

  constructor(private GoogleAPI: googlesearchservice) {}

  SearchResults(Queryparam: string) {
    return this.GoogleAPI.getResults(this.apiurl +  Queryparam );
  }
}
