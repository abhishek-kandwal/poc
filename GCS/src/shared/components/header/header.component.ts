import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.Service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  SearchResult = false;
  Data: any;
  ResultNextIndex: any;
  ResultprevIndex: any;

  constructor(private Userservice: UserService , private domSanitizer: DomSanitizer) { }
  @ViewChild('f', {static : false}) Searchbox: NgForm;

  OnclickSearch() {
    // tslint:disable-next-line: max-line-length
    const urlparams = 'q=' + this.Searchbox.value[ 'Queryparam' ] + '&num=5&cx=005314277313817109837%3Aznkkmtgnwyq&key=AIzaSyBJ-DvSxYno0czZGbsIRJqb2hULIopEPus' ;
    this.Searchapihit(urlparams);
  }

  prevSearch(){
    // tslint:disable-next-line: max-line-length
    const urlparams = 'q=' + this.Searchbox.value[ 'Queryparam' ] + '&num=5&start=' + this.ResultprevIndex + '&cx=005314277313817109837%3Aznkkmtgnwyq&key=AIzaSyBJ-DvSxYno0czZGbsIRJqb2hULIopEPus';
    this.Searchapihit(urlparams);
  }

  nextSearch() {
    // tslint:disable-next-line: max-line-length
    const urlparams = 'q=' + this.Searchbox.value[ 'Queryparam' ] + '&num=5&start=' + this.ResultNextIndex + '&cx=005314277313817109837%3Aznkkmtgnwyq&key=AIzaSyBJ-DvSxYno0czZGbsIRJqb2hULIopEPus';
    this.Searchapihit(urlparams);
  }


  closeResults(){
    this.SearchResult = false;
  }

  convertToSaveHtml(htmlText) {
    return this.domSanitizer.bypassSecurityTrustHtml(htmlText);
  }


  Searchapihit(Searchparam: string) {
    this.Userservice.SearchResults(Searchparam)
    .subscribe(res => {
      this.Data = res.items; // res.items[0].title
      this.ResultNextIndex = res.queries.nextPage[0].startIndex;

      if (res.queries.previousPage) {
        this.ResultprevIndex = res.queries.previousPage[0].startIndex;
      }

      this.SearchResult = true;
      console.log(this.Data , this.ResultNextIndex);
      console.log(res);
    });
  }
}
