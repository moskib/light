import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBackgroundChange = false;
  constructor() {}

  ngOnInit() {
    window.addEventListener(
      'scroll',
      function(e) {
        this.scroll(e);
      }.bind(this),
      true
    );
  }

  scroll(event: any) {
    const position = document.documentElement.scrollTop;
    if (position === 0) this.navBackgroundChange = false;
    else this.navBackgroundChange = true;
  }
}
