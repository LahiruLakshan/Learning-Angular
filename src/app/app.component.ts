import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';
  name = "lahiru";
  lastName = "lakshan";
  count:number=0;
  value = "";
  color : string = "blue";

  getName(){
    return this.lastName;
  }
  obj={
    name:"lahiru",
    age:20
  }
  arr=["lahiru","lakshan",20];

  myEvent(evt: any){
    console.log(evt);
  }

  getValue(data:any) {
    console.log(data.value);
    this.value=data.value;
  }
  getEvent(type:string){
    type == "add"? this.count++:this.count--;
  }
}
