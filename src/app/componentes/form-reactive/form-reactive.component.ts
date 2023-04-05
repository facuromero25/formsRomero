import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  )

  claveControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.max(16)
    ]
  )

  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email
    ]
  )

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      clave: this.claveControl,
      email: this.emailControl

    })
  }

  

  onSubmit(): void{
    if(this.registerForm.valid){
      alert('login exitos')
    }else{
      alert("campos incompletos o incorrectos")
      
    }
    
  }


}
