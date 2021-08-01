import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: number=10;


  random() {
    this.item = Math.floor(Math.random()*20);
  }
}
