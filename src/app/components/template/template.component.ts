import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component( {
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.sass' ]
} )
export class TemplateComponent implements OnInit {

  constructor () { }

  guardar( forma: NgForm ) {
    console.log( 'El formulario a sido guardado' );
    console.log( forma.value );

  }

  ngOnInit() {
    // this.guardar( 'Inicio' )
  }

}
