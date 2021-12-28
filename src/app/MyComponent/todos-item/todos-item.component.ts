import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Input()
  i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggred")
  }
  onCheckBoxClick(todo: Todo){
    this.todoCheckBox.emit(todo);
  }

}
