import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagePath: string;

  constructor() {
    this.imagePath = '../../../assets/img/DSC_0489.jpg';
  }

  ngOnInit() {
  }

}
