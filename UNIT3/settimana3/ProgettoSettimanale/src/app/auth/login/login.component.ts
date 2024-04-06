import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private authSrv: AuthService, private router: Router) {}

  login(form: NgForm) {
    console.log(form.value);
    this.authSrv.login(form.value).subscribe(
      () => {
        // Login riuscito, gestisci l'accesso
        this.router.navigate(['/film']);
      },
      (error) => {
        
        this.errorMessage = error; 
      }
    );
  }
}
