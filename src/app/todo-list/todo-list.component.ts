import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string) {
    this.list.push({id:this.list.length, name:value})
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
