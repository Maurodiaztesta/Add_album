import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todo!: any;

  cambiarBolean() {
    for (const index of this.todo) {
      if (index.isDone) {
        index.isDone = false
      } else {
        index.isDone = true
      }
    }
  }

  todoTrue() {
    for (const index of this.todo) {
      if (!index.isDone) {
        index.isDone = true
      }
    }
  }
}
