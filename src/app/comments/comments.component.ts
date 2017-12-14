import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  addCommentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  private initForm() {
    const comment = '';
    const account = localStorage.getItem('currentUser');

    this.addCommentForm = new FormGroup({
      'comment': new FormControl(comment, Validators.required),
      'account': new FormControl(account, Validators.required)
    });
  }
}

