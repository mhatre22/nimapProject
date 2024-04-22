import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    ReactiveFormsModule,
  MatSliderModule,
    BrowserAnimationsModule,
  ],
  exports:[
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
