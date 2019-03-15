import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
// const Color = require( 'colrs' );

@Component( {
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.sass' ]
} )
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: 'Jorge',
    apellido: 'Campoy',
    correo: 'jorgecampoy81@gmail.com'
  };

  constructor () {

  }

  guardar( forma: NgForm ) {
    // console.log( forma );
  }

  ngOnInit() {
    // console.log( Color( 'bgcyan' ) );

  }
}
