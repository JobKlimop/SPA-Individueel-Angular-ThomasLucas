import {Comment} from './comments.model';

export class Image {
  public title: string;
  public imageUrl: string;
  public description: string;
  public likes: number;
  public comments: Comment[];

  constructor(title: string, imageUrl: string, description: string, likes: number, comments: Comment[]) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.likes = likes;
    this.comments = comments;
  }
}
