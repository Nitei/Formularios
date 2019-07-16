import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ReactivePadreComponent } from './components/reactive-padre/reactive-padre.component';
import { ReactiveInputComponent } from './components/reactive-input/reactive-input.component';

@NgModule( {
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    ReactivePadreComponent,
    ReactiveInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
