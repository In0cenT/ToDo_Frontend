import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-to-do-dialog',
  templateUrl: './to-do-dialog.component.html',
  styleUrls: ['./to-do-dialog.component.css']
})
export class ToDoDialogComponent implements OnInit {

  @Input() toDoData = {taskName: '', extraNote: '', taskCompleted: false, dueDate: Date};

  constructor(
      public dialogRef: MatDialogRef<ToDoDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, private todoService: TodoService) {}


  ngOnInit() {
  }

  saveToDo() {
    this.dialogRef.close();
    this.todoService.addToDo(this.toDoData).subscribe((result) => {
      this.todoService.addToDo(this.toDoData);
    });
  }
}
