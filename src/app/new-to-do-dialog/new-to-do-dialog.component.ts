import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TodoService} from '../shared/todo.service';
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


    ngOnInit() {
    }


    saveToDo() {
        this.dialogRef.close();
        this.todoListService.addToDo();
    }
}

