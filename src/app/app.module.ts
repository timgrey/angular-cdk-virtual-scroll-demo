import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    ExperimentalScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
