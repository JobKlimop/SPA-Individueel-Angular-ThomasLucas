import { Component, OnInit } from '@angular/core';
import {Image} from '../../../../shared/images.model';
import {ImageService} from '../../_services/image.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: Image;
  _id: string;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this._id = params['_id'];
        }
      );

    this.route.data
      .subscribe((data: Data) => {
        this.image = data['image'];
      });
    console.log('DETAIL_IMAGE: ' + JSON.stringify(this.image));


  }

}
