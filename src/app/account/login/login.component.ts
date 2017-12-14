import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  account: Account;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  onLogin() {
    const val = this.loginForm.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
        .subscribe(() => {
          console.log(val.username + ' logged in');
          this.router.navigateByUrl('/');
          console.log(localStorage.getItem('token'));
          this.authService.isLoggedIn();
          location.reload();
        });
    }
  }
}
