import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ImagesComponent} from './images/images.component';
import {ContactComponent} from './contact/contact.component';
import {NgModule} from '@angular/core';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
