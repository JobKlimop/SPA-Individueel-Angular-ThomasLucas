import {Injectable} from '@angular/core';
import {Image} from '../../../shared/images.model';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ImageService} from '../_services/image.service';

@Injectable()
export class ImageDetailsResolver implements Resolve<Image> {

  constructor(private imageService: ImageService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const _id = route.paramMap.get('_id');
    return this.imageService.getImage(_id)
      .then(image => {
        console.log('RESOLVER_IMAGE: ' + JSON.stringify(image));
        if (image) {
        return image;
        } else {
          this.router.navigate(['/images']);
          return null;
        }
    });
  }
}

