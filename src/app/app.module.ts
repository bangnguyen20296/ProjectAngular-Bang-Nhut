import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
=======
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
=======
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
>>>>>>> 6859f721e9cb08348f2a36633a04afd6ac41f5e1

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, HttpModule
=======
<<<<<<< HEAD
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule,HttpModule
=======
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
>>>>>>> 6859f721e9cb08348f2a36633a04afd6ac41f5e1
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
