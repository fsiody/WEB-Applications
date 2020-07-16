import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  credentials: Credentials = new Credentials();
  registerInfo = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.login(this.credentials)
      .then(() => { this.router.navigate(['/products']); })
      .catch(err => { console.log(err.message); this.registerInfo = err.message });
  }

  register() {
    this.authService.register(this.credentials)
      .then(() => { this.router.navigate(['/products']); })
      .catch(err => this.registerInfo = err.message);
  }

}
