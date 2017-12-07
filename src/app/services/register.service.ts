import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Account} from '../account/account.model';

@Injectable()
export class RegisterService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = environment.serverUrl + '/user';
  private account: Account[];

  constructor(private http: Http) {
    console.log(this.url);
  }

  public submitRegistration(account: Account): Promise<Account[]> {
    return this.http.post(
      this.url,
      JSON.stringify(account),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json() as Account;
      })
      .catch(error => {
        return this.handleError(error);
      });
    }

    private handleError(error: any): Promise<any> {
    console.log('handle error - registration account list');
    return Promise.reject(error.message || error);
    }
}
