import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  constructor( private viewportScroller: ViewportScroller ) { }

  ngOnInit(): void {
  }

}
