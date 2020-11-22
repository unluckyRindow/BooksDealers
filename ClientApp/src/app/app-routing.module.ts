import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './auth/components/login/login.component';
import { BooksListComponent } from './book/components/books-list/books-list.component';
import { UserBooksListComponent } from './book/components/user-books-list/user-books-list.component';
import { TradesListComponent } from './trade/components/trades-list/trades-list.component';
import { HomeComponent } from './home/components/home/home.component';
import { ProfileComponent } from './profile/components/profile/profile.component';

// TODO routing for perticular book (popup insted?) and existing trade
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'login', component: LoginComponent, data: {registrationMode: false}},
  {path: 'register', component: LoginComponent, data: {registrationMode: true}},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'books', component: BooksListComponent, canActivate: [AuthGuard]},
  {path: 'my-books', component: UserBooksListComponent, canActivate: [AuthGuard]},
  {path: 'trades', component: TradesListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
