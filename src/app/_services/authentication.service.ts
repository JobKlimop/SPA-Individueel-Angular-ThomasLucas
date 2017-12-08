import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  login(username: string, password: string) {
    return this.http.post('users/authenticate', {username: username, password: password})
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          // save user in local storage to keep logged in inbetween page switches
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
