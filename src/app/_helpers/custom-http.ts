import {Injectable} from '@angular/core';
import {ConnectionBackend, Http, RequestOptions, RequestOptionsArgs, XHRBackend} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class CustomHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(environment.serverUrl + url, this.addJwt(options))
      .catch(this.handleError);
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(environment.serverUrl + url, body, this.addJwt(options))
      .catch(this.handleError);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(environment.serverUrl + url, body, this.addJwt(options))
      .catch(this.handleError);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(environment.serverUrl + url, this.addJwt(options))
      .catch(this.handleError);
  }

  private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
    // make sure options & headers != null
    options = options || new RequestOptions();
    options.headers = options.headers || new Headers();

    // add auth header with token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      options.headers.append('Authorization', 'Bearer ' + currentUser.token);
    }
  }

  private handleError(error: any) {
    if (error.status === 401) {
      // 401 unauthorized response so log user out of client
      window.location.href = '/login';
    }

    return Observable.throw(error._body);
  }
}

export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new CustomHttp(xhrBackend, requestOptions);
}

export let customHttpProvider = {
  provide: Http,
  useFactory: customHttpFactory,
  deps: [XHRBackend, RequestOptions]
};
