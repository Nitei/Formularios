import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup
  usuario = {
    nombreCompleto: {
      nombre: 'Jorge',
      apellido: 'Campoy'
    },
    correo: 'jorgecampoy81@gmail.com',
    pasatiempos: ['Correr', 'Leer', 'Youtube']
  }

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        // nombre: new FormControl(this.usuario.nombreCompleto.nombre, [
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      correo: new FormControl('jorgecampoy81@gmail.com', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('Correr', Validators.required),
      ])
    })
    this.forma.setValue(this.usuario)
  }

  agregarPasatiempos() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Correr', Validators.required)
    );
  }

  guardarCambios() {
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
