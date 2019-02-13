import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TodoListService} from '../shared/todo-list-service';

@Component({
    selector: 'app-to-do-dialog',
    templateUrl: './new-to-do-dialog.component.html',
    styleUrls: ['./new-to-do-dialog.component.css']
})
export class NewToDoDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<NewToDoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private todoListService: TodoListService) {
    }

    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);


    ngOnInit() {
    }


    saveToDo() {
        this.dialogRef.close();
        this.todoListService.addToDo();
    }

    log() {
        console.log(this.todoListService.toDoData.taskName, (!this.todoListService.toDoData.dueDate));
    }

    checkValid() {
        if ((this.todoListService.toDoData.taskName.length > 1) || (this.todoListService.toDoData.dueDate != null)) {
            console.log('not null');
        }
    }

}

