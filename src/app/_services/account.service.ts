import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Account} from '../_models/account.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AccountService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = environment.serverUrl + '/user/';
  private accountChanged = new Subject<Account[]>();
  private account: Account[];


  constructor(private http: Http) {
    console.log(this.url);
  }

  public getAccounts(): Promise<Account> {
    return this.http.get(this.url, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as Account[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getAccountByUsername(username: string): Promise<Account> {
    return this.http.get(this.url + username)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json() as Account;
      });
  }

  public submitRegistration(account: Account): Promise<Account> {
    return this.http.post(
      this.url + 'register',
      JSON.stringify(account),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        return response.status;
      })
      .catch(error => {
        return this.handleError(error);
      });
    }

  updateAccount(username: string, changedAccount: Account): Promise<Account> {
    return this.http.put(
      this.url + username,
      JSON.stringify(changedAccount),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.status;
      }
    )
      .catch(error => {
        return this.handleError(error);
      });
  }

  deleteAccount(username: string): Promise<Account> {
    return this.http.delete(
      this.url + username,
      {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.status;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

    private handleError(error: any): Promise<any> {
    console.log('error on accounts');
    return Promise.reject(error.message || error);
    }
}
