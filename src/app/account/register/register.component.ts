import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {RegisterService} from '../../services/register.service';
import {Account} from '../account.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  account: Account;

  constructor(private route: ActivatedRoute,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
      this.account = data['register'];
      this.initForm();
    });
    this.initForm();
  }

  onRegister() {
    this.registerService.submitRegistration(this.registerForm.value);
    this.onCancel();
    console.log(this.registerForm.value.username);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    const username = '';
    const firstName = '';
    const lastName = '';
    const email = '';
    const password = '';

    this.registerForm = new FormGroup({
      'username': new FormControl(username),
      'firstName': new FormControl(firstName),
      'lastName': new FormControl(lastName),
      'email': new FormControl(email),
      'password': new FormControl(password)
    });
  }
}
