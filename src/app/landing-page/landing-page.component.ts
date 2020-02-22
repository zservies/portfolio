import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  carouselCount = 1;

  constructor() { }

  ngOnInit() {
  }

  carouselNav(direction) {
    switch (direction) {
      case 'next':
        this.carouselCount++;
        break;
      case 'back':
        this.carouselCount--;
    }
    if (this.carouselCount > 3) {
      this.carouselCount = 1;
    } else if (this.carouselCount === 0) {
      this.carouselCount = 3;
    }
  }
}
