import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  // Keep track of user's current page for button toggles.
  buttonToggled =
    {
      home: {
        isToggled: false
      },
      about: {
        isToggled: false
      },
      // resume: {
      //   isToggled: false
      // }
    };


  constructor(private router: Router) { }

  toggleNav(event) {
    // Loop through the button toggles and set them all to false
    for (const button of Object.keys(this.buttonToggled)) {
      this.buttonToggled[button].isToggled = false;
    }
    // Set the toggle emitted to true.
    this.buttonToggled[event].isToggled = true;
    this.router.navigateByUrl(event);
  }

  currentLocation() {
    // Get current pathname and call toggleNav() to do appropriate routing/button highlighting.
    const currentLocation = window.location.pathname;
    switch (currentLocation) {
      case '/home':
        this.toggleNav('home');
        break;
      case '/':
        this.toggleNav('home');
        break;
      case '/about':
        this.toggleNav('about');
        break;
      // case '/resume':
      //   this.toggleNav('resume');
      //   break;
    }
  }

  ngOnInit() {
    this.currentLocation();
  }

}
