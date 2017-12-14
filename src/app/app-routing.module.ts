import {RouterModule, Routes, Router} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ImagesComponent} from './images/images.component';
import {ContactComponent} from './contact/contact.component';
import {NgModule} from '@angular/core';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {AddImageComponent} from './images/add-image/add-image.component';
import {ImageDetailsComponent} from './images/image-details/image-details.component';
import {ImageDetailsResolver} from './_resolvers/image-details-resolver';

const appRoutes: Routes = [
  {path: '/', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'imagedetails/:id', component: ImageDetailsComponent
    , resolve: {image: ImageDetailsResolver}
    },
  {path: 'addImage', component: AddImageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    RouterModule
  ],
  exports: [RouterModule],
  providers: [ImageDetailsResolver]
})

export class AppRoutingModule {

}
