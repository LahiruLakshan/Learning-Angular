import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title="Form";
  constructor() { }

  ngOnInit(): void {
  }

  getData(value:NgForm) {
    console.log(value);
  }
}
