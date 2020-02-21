import { Component, OnInit } from '@angular/core';

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
      resume: {
        isToggled: false
      },
      socials: {
        isToggled: false
      }
    };


  constructor() { }

  toggleNav(event) {
    // Loop through the button toggles and set them all to false
    for (const button of Object.keys(this.buttonToggled)) {
      this.buttonToggled[button].isToggled = false;
    }
    // Set the toggle emitted to true.
    this.buttonToggled[event].isToggled = true;
  }

  ngOnInit() {
    this.buttonToggled.home.isToggled = true;
  }

}
