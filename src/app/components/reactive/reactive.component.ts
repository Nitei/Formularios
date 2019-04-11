import {Component, OnInit} from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;
  usuario = {
    nombreCompleto: {
      nombre: 'Jorge',
      apellido: 'Campoy'
    },
    correo: 'jorgecampoy81@gmail.com',
    pasatiempos: ['Correr', 'Leer', 'Youtube']
  }

  constructor(private fb: FormBuilder) {

    this.forma = this.fb.group({
      nombreCompleto: this.fb.group({
        nombre: this.fb.control('Jorge', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: this.fb.control('Campoy', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      correo: this.fb.control('jorgecampoy81@gmail.com', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      // pasatiempos: this.fb.array([
      //   this.fb.control('', Validators.required),
        // this.fb.control('Leer', Validators.required),
        // this.fb.control('Youtube', Validators.required),
      // ]),
      password1: this.fb.control('', Validators.required),
      password2: this.fb.control('', Validators.required),
    })

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noEqual.bind( this )
    ])
    // this.forma.setValue(this.usuario)
  }

  noEqual( control: FormControl ) {
    if( control.value !== this.forma.controls['password1'].value ) {
      return {
        noIgual: true
      };
    } else { return null; }
  }

  agregarPasatiempos(ev) {
    console.log(ev);
    (<FormArray>this.forma.controls['pasatiempos']).push(
      this.fb.control('Correr', Validators.required)
    );
  }

  guardarCambios() {
    console.log(this.forma)
    console.log(this.forma.value)
    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // })
  }

  ngOnInit() {}
}
