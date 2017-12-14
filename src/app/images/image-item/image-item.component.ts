import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../../../shared/images.model';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  @Input() image: Image;

  constructor() { }

  ngOnInit() {
  }

}
