import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../../_services/comment.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Data, Router} from '@angular/router';
import {AccountService} from '../../_services/account.service';
import {Account} from '../../_models/account.model';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  addCommentForm: FormGroup;
  comment: Comment;
  currentUser = localStorage.getItem('currentUser');
  // account: Account;

  constructor(private commentService: CommentService,
              private router: Router,
              private route: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.comment = data['addImage'];
          this.initForm();
        });
    this.initForm();

    // this.accountService.getAccountByUsername(this.currentUser)
    //   .then(user => this.account = user);
  }

  onSubmit() {
    this.commentService.addComment(this.addCommentForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    const comment = '';
    // const user = JSON.stringify(this.account._id);

    // console.log('USER_COMMENT: ' + user);

    this.addCommentForm = new FormGroup({
      'comment': new FormControl(comment, Validators.required)
      // 'user': new FormControl(user, Validators.required)
    });
  }
}
