import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';
import { CommonModule } from '@angular/common';

@NgModule( {
  declarations: [
    AppComponent,
    DataComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
