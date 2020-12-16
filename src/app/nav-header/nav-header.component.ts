import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import test from '../../assets/ZacharyServies_Resume.pdf'
@Component({
  selector: "app-nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.scss"],
})
export class NavHeaderComponent implements OnInit {
  // Keep track of user's current page for button toggles.
  buttonToggled = {
    home: {
      isToggled: false,
    },
    about: {
      isToggled: false,
    },
    resume: {
      isToggled: false,
    },
  };
  showName = false;

  constructor(private router: Router) {}

  toggleNav(event) {
    this.showName = event === "about" ? true : false;
    // Loop through the button toggles and set them all to false
    for (const button of Object.keys(this.buttonToggled)) {
      this.buttonToggled[button].isToggled = false;
    }
    // Set the toggle emitted to true.
    this.buttonToggled[event].isToggled = true;
    console.log(event);
    this.router.navigateByUrl(event);
  }

  currentLocation() {
    // Get current pathname and call toggleNav() to do appropriate routing/button highlighting.
    const currentLocation = window.location.pathname;
    switch (currentLocation) {
      case "/home":
        this.toggleNav("home");
        this.showName = false;
        break;
      case "/":
        this.toggleNav("home");
        this.showName = false;
        break;
      case "/about":
        this.toggleNav("about");
        this.showName = true;

        break;
      case "/resume":
        this.toggleNav("resume");
        this.showName = false;
        break;
    }
  }

  ngOnInit() {
    this.currentLocation();
  }
}
