import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Project';
  challenge = 1;

  /**
   * Show challenge based upon click button
   * @param value Value assigned
   */
  clickOnChallenge(value): void {
    this.challenge = value;
  }
}
