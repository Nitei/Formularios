import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { ReactiveComponent } from './components/reactive/reactive.component';

@NgModule( {
  declarations: [
    AppComponent,
    DataComponent,
    TemplateComponent,
    OnlyNumberDirective,
    ReactiveComponent
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
