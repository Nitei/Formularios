import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component( {
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.sass' ]
} )
export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: '',
    apellido: 'Campoy',
    correo: ''
  };

  constructor () { }

  guardar( forma: NgForm ) {
    console.log( forma.controls.nombre.valid );
    console.log( forma );
  }

  ngOnInit() {
    // this.guardar( 'Inicio' )
  }

}
