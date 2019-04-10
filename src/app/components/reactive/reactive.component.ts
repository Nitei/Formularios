import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ] ),
      'apellido': new FormControl('Campoy', [
        Validators.required,
        Validators.minLength(3)
        ]),
      'correo': new FormControl('jorgecampoy81@gmail.com', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
  }

  guardarCambios() {
    console.log(this.forma);
  }

  ngOnInit() {
  }

}
