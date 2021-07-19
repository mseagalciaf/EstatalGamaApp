import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-pages',
  templateUrl: './title-pages.component.html',
  styleUrls: ['./title-pages.component.scss']
})
export class TitlePagesComponent implements OnInit {

  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
