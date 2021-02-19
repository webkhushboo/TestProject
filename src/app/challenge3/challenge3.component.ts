// Core module
import { Component, OnInit } from '@angular/core';

/**
 * Challenge3 component
 */
@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.scss'],
})

export class Challenge3Component implements OnInit {
  isToggle: boolean = false;

  /**
   * Life cycle method
   */
  constructor() {}

  /**
   * Life cycle init method
   */
  ngOnInit(): void {}

  /**
   * Active the card
   */
  toggle() {
    this.isToggle = !this.isToggle;
  }
}
