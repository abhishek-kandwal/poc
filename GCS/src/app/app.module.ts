import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Componentmodule } from '../shared/components/componentts.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Componentmodule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
