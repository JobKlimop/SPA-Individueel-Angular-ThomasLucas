import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'Home';
  imagePath: string;

  constructor() {
    this.imagePath = '../../assets/img/DSC_0216.jpg';
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
