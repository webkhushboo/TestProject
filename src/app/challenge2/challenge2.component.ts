import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.scss']
})
export class Challenge2Component implements OnInit {

  /**
   * Life cycle method
   */
  constructor() { }

  /**
   * Life cycle init method
   */
  ngOnInit(): void {
  }

  /**
   * Show alert on click of buy button
   */
  success(): void {
    alert('The buy is success');
  }
}
