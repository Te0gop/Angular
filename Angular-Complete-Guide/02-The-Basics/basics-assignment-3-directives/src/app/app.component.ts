import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean = false;
  logs: string[] = [];


  onClick() {
    this.toggle = !this.toggle;
    this.logs.push(new Date().toISOString())
  }

}
