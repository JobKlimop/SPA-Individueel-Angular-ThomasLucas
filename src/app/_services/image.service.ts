import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Image} from '../../../shared/images.model';

@Injectable()
export class ImageService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('id_token')});
  private url = environment.serverUrl + '/images/';
  private image: Image[];
  private user = localStorage.getItem('currentUser');

  constructor(private http: Http) {

  }

  public getImages(): Promise<Image[]> {
    return this.http.get(
      this.url,
      {headers: this.headers})
        .toPromise()
        .then(response => {
          console.log(response);
          return response.json() as Image[];
        })
        .catch(error => {
          return this.handleError(error);
        });
  }

  public getImage(_id: string): Promise<Image> {
    return this.http.get(
      this.url + _id)
      .toPromise()
      .then(response => {
        return response.json() as Image;
      }
    );
  }

  public addImage(image: Image): Promise<Image> {
    console.log('IMAGE: ' + JSON.stringify(image));
    return this.http.post(
      this.url + this.user,
      JSON.stringify(image),
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

  private handleError(error: any): Promise<any> {
    console.log('error on images');
    return Promise.reject(error.message || error);
  }
}
