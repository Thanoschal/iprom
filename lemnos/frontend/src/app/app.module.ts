import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { CarouselModule, WavesModule, CardsModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    CardsModule,
    CarouselModule,
    WavesModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule{ }
