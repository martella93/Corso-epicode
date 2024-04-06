import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  form!: FormGroup;
  genere = ['uomo', 'donna'];

  constructor(private fb: FormBuilder) {}

  ngOninit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        name: this.fb.control(null, [Validators.required]),
        cognome: this.fb.control(null, [Validators.required]),
        password: this.fb.control(null, [Validators.required]),
        conferma_password: this.fb.control(null, [Validators.required]),
        genere: this.fb.control(''),
        immagine_profilo: this.fb.control(null, [Validators.required]),
        biografia: this.fb.control(null, [Validators.required]),
        username: this.fb.control(null, [Validators.required]),
      }),
    });
    this.form.valueChanges.subscribe((status) => {
      console.log('stato del form', status);
    });
  }

  getErrors(nome: string, error: string) {
    return this.form.get(nome)?.errors![error];
  }
  getFormC(nome: string) {
    return this.form.get(nome);
  }

  submit(): void {
    console.log(this.form);
    console.log('Form correttamente inviato');
    this.form.reset();
  }
}
