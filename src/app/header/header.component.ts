import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private todoService: TodoService) {
  }

  @Input() toDoData = {taskName: '', extraNote: '', taskCompleted: false, dueDate: Date};

  addToDo() {
    this.todoService.addToDo(this.toDoData).subscribe((result) => {
      this.todoService.addToDo(this.toDoData);
    });
  }
}
