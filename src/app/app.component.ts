import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: number=10;
  userDetails:{name: string, email: string}[]=[
    {name:"Lahiru", email:"lahiru@gmail.com"},
    {name:"Lakshan", email: "lakshan@gmail.com"},
    {name:"Tissera", email: "tissera@gmail.com"},
    {name:"Peter", email: "peter@gmail.com"},
  ]
  data="Eg: Something..."
  random() {
    this.item = Math.floor(Math.random()*20);
  }

  updateDataEvent(value:string){
    if (value === ""){
      value = "Eg: Something..."
    }
    this.data = value;
  }
}
