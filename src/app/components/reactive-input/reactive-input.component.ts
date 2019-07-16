import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component( {
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: [ './reactive-input.component.sass' ]
} )
export class ReactiveInputComponent implements OnInit {
  form: FormArray;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.initializeForm();
  }
  public initializeForm() {
    this.form = this.formBuilder.array( [
      this.formBuilder.control( 'algo' ),
      this.formBuilder.control( 'o no' ),
      this.formBuilder.control( 'distinto' ),
    ] )
    console.log( this.form );

  }
}
