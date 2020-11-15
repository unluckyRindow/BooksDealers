import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  // button handlers area

  navigateHome(): void {
    if (this.router.url !== '/home'){
      this.router.navigate(['/home']);
    }
  }

  navigateBooks(): void {
    if (this.router.url !== '/books'){
      this.router.navigate(['/books']);
    }
  }

  navigateMyBooks(): void {
    if (this.router.url !== '/my-books'){
      this.router.navigate(['/my-books']);
    }
  }

  navigateTrades(): void {
    if (this.router.url !== '/trades'){
      this.router.navigate(['/trades']);
    }
  }

  navigateSettings(): void {
    if (this.router.url !== '/profile'){
      this.router.navigate(['/profile']);
    }
  }

  logout(): void {
    this.authService.logout();
  }
  // end button handlers area
}
