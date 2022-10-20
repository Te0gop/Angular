import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  firstOpen = false;
  secondOpen = false;
  thirdOpen = false;

  firstToggle() {
    this.firstOpen = true;
    this.secondOpen = false;
    this.thirdOpen = false;
  }
  secondToggle() {
    this.firstOpen = false;
    this.secondOpen = true;
    this.thirdOpen = false;
  }
  thirdToggle() {
    this.firstOpen = false;
    this.secondOpen = false;
    this.thirdOpen = true;
  }
}
