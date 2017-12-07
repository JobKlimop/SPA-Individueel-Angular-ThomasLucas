export class Comment {
  public comment: string;
  public account: Account;

  constructor(comment: string, account: Account) {
    this.comment = comment;
    this.account = account;
  }
}
