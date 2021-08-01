import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  title: string = "Reactive Form";
  loginForm: FormGroup = new FormGroup({
    user:new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z]+$")]),
    email:new FormControl("", [Validators.required,Validators.email]),
    password:new FormControl("", [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get("user")
  }
  get email(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }

}
