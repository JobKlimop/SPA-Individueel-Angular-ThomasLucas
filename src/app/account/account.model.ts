import {Image} from '../../../shared/images.model';

export class Account {
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public images: Image[];

  constructor(username: string, firstName: string, lastName: string, email: string, password: string, images: Image[]) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.images = images;
  }
}
