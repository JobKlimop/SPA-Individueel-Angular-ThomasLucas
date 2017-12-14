import { Component, OnInit } from '@angular/core';
import {Image} from '../../../shared/images.model';
import {ImageService} from '../_services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages()
      .then(images => this.images = images);
  }

}
