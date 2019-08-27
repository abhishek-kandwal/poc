import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private Userservice: UserService , private domSanitizer:DomSanitizer) { }
  @ViewChild('f', {static : false}) Searchbox: NgForm;

  Onclick(){
    this.Userservice.SearchResults(this.Searchbox.value[ 'Queryparam' ])
    .subscribe(res => {
      this.Data = res.items; // res.items[0].title
      this.SearchResult = true;
      console.log(this.Data);
    });


  }

  closeResults(){
    this.SearchResult = false;
  }

  convertToSaveHtml(htmlText) {
    return this.domSanitizer.bypassSecurityTrustHtml(htmlText);
  }

}
