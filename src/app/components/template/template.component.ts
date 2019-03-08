import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.sass' ]
} )
export class TemplateComponent implements OnInit {

  constructor () { }

  guardar( form: any ) {
    console.log( 'El formulario a sido guardado' );
    console.log( form );
  }

  ngOnInit() {
    // this.guardar( 'Inicio' )
  }

}
