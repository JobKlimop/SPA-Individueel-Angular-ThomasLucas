///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../../../shared/images.model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {ImageService} from '../../_services/image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  addImageForm: FormGroup;
  image: Image;

  constructor(private route: ActivatedRoute,
              private imageService: ImageService,
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.image = data['addImage'];
          this.initForm();
        });
    this.initForm();
  }

  onSubmit() {
    this.imageService.addImage(this.addImageForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    const imageTitle = '';
    const imageDescription = '';
    const imageUploadDate = Date.now();
    const imageUrl = '';

    this.addImageForm = new FormGroup({
      'title': new FormControl(imageTitle, Validators.required),
      'description': new FormGroup ({
          'description': new FormControl(imageDescription),
          'uploadDate': new FormControl(imageUploadDate, Validators.required)
        }),
      'imageUrl': new FormControl(imageUrl, Validators.required)
    });
  }
}
