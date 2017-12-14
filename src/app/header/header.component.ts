import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<String>();
  userLoggedIn = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
    console.log('isLoggedIn: ' + this.authService.isLoggedIn().valueOf());
    console.log('USER_LOGGED_IN: ' + this.userLoggedIn);
    console.log('CURRENT_USER: ' + localStorage.getItem('currentUser'));


  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
    location.reload();
  }
}
