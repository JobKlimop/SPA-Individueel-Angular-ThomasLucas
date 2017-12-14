import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../_models/account.model';
import 'rxjs/Rx';
import * as moment from 'moment';
import {environment} from '../../environments/environment';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  private url = environment.serverUrl + '/user/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<Account>(this.url + 'login', {'username': username, 'password': password})
      .do(res => {
        console.log('RESPONSE: ' + JSON.stringify(res));
        this.setSession(res, username);
      })
      .shareReplay();
  }

  private setSession(authResult, username) {
    const expiresAt = moment().add(authResult.expiresIn, 'minute');

    localStorage.setItem('id_token', JSON.stringify({authResult}));
    localStorage.setItem('currentUser', username);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    console.log('EXPIRES_AT: ' + localStorage.getItem('expires_at'));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('currentUser');
    this.isLoggedIn();
    console.log('ID_TOKEN_AFTER_LOGOUT: ' + localStorage.getItem('id_token'));
    console.log('EXPIRES_AT_AFTER_LOGOUT: ' + localStorage.getItem('expires_at'));
    console.log('ISLOGGEDIN: ' + this.isLoggedIn());
  }

  public isLoggedIn() {
    return tokenNotExpired('id_token');
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
