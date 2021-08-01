import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: number=10;
  userDetails: any[]=[
    {name:"Lahiru", email:"lahiru@gmail.com"},
    {name:"Lakshan", email: "lakshan@gmail.com"},
    {name:"Tissera", email: "tissera@gmail.com"},
    {name:"Peter", email: "peter@gmail.com"},
  ]

  random() {
    this.item = Math.floor(Math.random()*20);
  }
}
