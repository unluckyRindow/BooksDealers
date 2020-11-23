import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, ValidationErrors, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RegistrationData, LoginData } from '../../models/user.model';
import { ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@UntilDestroy()
export class LoginComponent implements OnInit {

  @Input()
  registrationMode: boolean;

  invalidLoginAttempt = false;
  invalidRegistrationAttempt = false;
  hidePassword = true;

  signInGroup = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  signUpGroup = this.fb.group({
    login: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    name: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.registrationMode = data.registrationMode;
      });
    this.signUpGroup.setValidators(this.passwordsMatchValidator);
  }

  get loginData(): LoginData {
    return  {
      login: this.signInGroup.value.login,
      password: this.signInGroup.value.password,
    } as LoginData;
  }

  get registrationData(): RegistrationData {
    return {
      login: this.signUpGroup.value.login,
      password: this.signUpGroup.value.password,
      email: this.signUpGroup.value.email,
      name: this.signUpGroup.value.name,
    } as RegistrationData;
  }

  onSignIn(): void {
    if (this.signInGroup.valid){
      this.authService.authenticate(this.loginData)
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
    if (!this.registrationMode) {
      this.router.navigate(['/register']);
      this.registrationMode = true;
    } else {
      this.authService.register(this.registrationData)
        .pipe(untilDestroyed(this))
        .subscribe(res => {
          if (res) {
            this.invalidRegistrationAttempt = false;
            this.registrationMode = false;
            this.router.navigate(['/login']);
            this.signUpGroup.reset();
          } else {
            this.invalidRegistrationAttempt = true;
          }
        });
    }
  }

  onCancel(): void {
    this.router.navigate(['/login']);
    this.registrationMode = false;
    this.signUpGroup.reset();
  }

  // TODO fix not applying validator below
  passwordsMatchValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const password = group.controls.password;
      const passwordConfirm = group.controls.passwordConfirm;
      return (password.value !== passwordConfirm.value) ? {equivalentPasswords: false} : null;
    };
  }
}
