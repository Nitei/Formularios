import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component( {
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.sass' ]
} )
export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: 'Jorge',
    apellido: 'Campoy',
    correo: ''
  };

  constructor () { }

  guardar( forma: NgForm ) {
    console.log( forma.controls.nombre.errors.minlenght );
    console.log( forma.controls.nombre.errors.required );
    // console.log( forma );
  }

  ngOnInit() {
  }

}
