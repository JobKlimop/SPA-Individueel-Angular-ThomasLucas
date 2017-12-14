import {Injectable} from '@angular/core';
import {Image} from '../../../shared/images.model';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CommentService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('id_token')});
  private url = environment.serverUrl + '/comments/';
  private comment: Comment[];
  private user = localStorage.getItem('currentUser');

  constructor(private http: Http) {}

  public getComment(_id: string): Promise<Image> {
    return this.http.get(
      this.url + _id)
      .toPromise()
      .then(response => {
          return response.json() as Comment;
        })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public addComment(comment: Comment): Promise<Comment> {
    return this.http.post(
      this.url + this.user,
      JSON.stringify(comment),
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
