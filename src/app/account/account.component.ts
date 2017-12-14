import { Component, OnInit } from '@angular/core';
import {AccountService} from '../_services/account.service';
import {Account} from '../_models/account.model';
import {forEach} from '@angular/router/src/utils/collection';
import {Image} from '../../../shared/images.model';
import {ImageService} from '../_services/image.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser = localStorage.getItem('currentUser');
  account: Account;
  images: Image[];

  constructor(private accountService: AccountService,
              private imageService: ImageService) { }

  ngOnInit() {
    this.accountService.getAccountByUsername(this.currentUser)
      .then(user => this.account = user);
      // .then(user => this.imageArr = user.images);

  }

}
