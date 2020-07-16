import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Shop"

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['login']))
      .catch(err => console.log(err.message));
  }
}
