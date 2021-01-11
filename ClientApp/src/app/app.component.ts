import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BooksExchange';
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void{
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.loadUserDataFromLocalStorage();

    this.authService.authenticationChanged
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.isAuthenticated = this.authService.isAuthenticated();
      });
  }
}
