import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() sideNav : MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav(){
    this.sideNav.toggle();
  }
}
