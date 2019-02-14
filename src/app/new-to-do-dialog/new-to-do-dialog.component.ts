import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TodoListService} from '../shared/todo-list-service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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

    todoForm: FormGroup;


    ngOnInit() {
        this.createForm();
    }

    saveToDo() {
        this.dialogRef.close();
        this.todoListService.toDoData.taskName = this.todoForm.get('taskName').value;
        this.todoListService.toDoData.dueDate = this.todoForm.get('dueDate').value;
        this.todoListService.toDoData.extraNote = this.todoForm.get('extraNote').value;
        this.todoListService.addToDo();
    }


    createForm() {
        this.todoForm = new FormGroup({
            taskName: new FormControl(''),
            dueDate: new FormControl(''),
            extraNote: new FormControl('')
        });
    }


}

