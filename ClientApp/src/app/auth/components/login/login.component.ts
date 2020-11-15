import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@UntilDestroy()
export class LoginComponent implements OnInit {

  @Input()
  loginMode: boolean;
  invalidLoginAttempt = false;
  hidePassword = true;

  signInGroup = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }


  onSignIn(): void {
    if (this.signInGroup.valid){
      const login = this.signInGroup.get('login').value;
      const password = this.signInGroup.get('password').value;
      this.authService.authenticate(login, password)
        .pipe(untilDestroyed(this))
        .subscribe(res => {
          if (res) {
            this.invalidLoginAttempt = false;
            this.router.navigate(['/home']);
          } else {
            this.invalidLoginAttempt = true;
          }
        });
    }
  }

  onSignUp(): void {
    if (this.loginMode) {
      this.router.navigate(['/register']);
      this.loginMode = false;
    } else {
      // registration logic here
    }
  }

  onCancel(): void {
    this.router.navigate(['/login']);
    this.loginMode = true;
  }

}
