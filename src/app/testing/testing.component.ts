import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Learning Angular';
  name = "lahiru";
  lastName = "lakshan";
  count:number=0;
  value = "";
  color : string = "blue";
  users: string[]=["Lahiru", "Lakshan", "Tissera"];
  userDetails:any = [
    {name:"Lahiru",year:1999, school:"Sri Dharmaloka College"},
    {name:"Kalana",year:2000, school:"DS Collage"}
  ];
  usersList=[
    {name:"Lahiru",phone:1112434311,email:"lahiru@gmail.com", account:['facebook', 'gmail', 'linkedIn']},
    {name:"Peter",phone:132322334,email:"peter@gmail.com", account:['linkedIn', 'yahoo', 'youtube']},
    {name:"Kasun",phone:1112344211,email:"kasun@gmail.com", account:['twitter', 'instagram', 'youtube']}
  ]
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
