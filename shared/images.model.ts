import {Comment} from './comments.model';

export class Image {
  public _id: string;
  public title: string;
  public imageUrl: string;
  public description: string;
  public uploadDate: Date;
  public likes: number;
  public comments: Comment[];

  constructor(_id: string, title: string, imageUrl: string, description: string, uploadDate: Date, likes: number, comments: Comment[]) {
    this._id = _id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.uploadDate = uploadDate;
    this.likes = likes;
    this.comments = comments;
  }
}
