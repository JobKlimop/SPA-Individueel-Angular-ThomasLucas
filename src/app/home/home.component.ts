import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ImageService} from '../_services/image.service';
import {Image} from '../../../shared/images.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private images: Image[];

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.getImages()
      .then(images => this.images = images);
  }

}
