import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './_services/account.service';
import {AuthService} from './_services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { AddImageComponent } from './images/add-image/add-image.component';
import {ImageService} from './_services/image.service';
import { ImageDetailsComponent } from './images/image-details/image-details.component';
import { ImageItemComponent } from './images/image-item/image-item.component';
import {RouterModule} from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentComponent } from './comments/create-comment/create-comment.component';
import {CommentService} from './_services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ImagesComponent,
    ContactComponent,
    AccountComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    AddImageComponent,
    ImageDetailsComponent,
    ImageItemComponent,
    CommentsComponent,
    CreateCommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AccountService, AuthService, ImageService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

