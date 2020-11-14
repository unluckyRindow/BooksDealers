import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { TradeModule } from './trade/trade.module';
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './common-ui/header/header.component';
import { MenuComponent } from './common-ui/menu/menu.component';
import { AuthGuard } from './auth/auth-guard';



export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    AuthModule,
    BookModule,
    TradeModule,
    HomeModule,
    ProfileModule
  ],
  exports: [MaterialModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
