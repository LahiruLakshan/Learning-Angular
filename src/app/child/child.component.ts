import {Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()
  item:number = 0;

  @Output()
  updateData = new EventEmitter<string>();
  ngOnInit(): void {
  }

}
