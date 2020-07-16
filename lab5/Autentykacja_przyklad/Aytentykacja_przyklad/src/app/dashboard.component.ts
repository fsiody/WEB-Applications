import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { Router } from '@angular/router';
@Component({
  template: `
    <div>
      <pre>{{ user | json }}</pre>
      <button (click)="logout()">LOGOUT</button>
    </div>
  `
})
export class DashboardComponent {
  user = this.authService.user;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
}