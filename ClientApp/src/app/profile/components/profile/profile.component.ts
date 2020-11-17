import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  languages = [
    {value: 'en', label: 'English'},
    {value: 'pl', label: 'Polski'}
  ];
  profileEditGroup = this.fb.group({
    password: [''],
    password_confirm: ['']
  });

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  onLanguageChange(lang: string): void {
    this.translateService.use(lang);
  }

  onSave(): void {
    // validate and save pass
  }

}
