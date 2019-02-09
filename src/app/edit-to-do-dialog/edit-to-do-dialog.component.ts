import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TodoService} from '../shared/todo.service';

@Component({
    selector: 'app-edit-to-do-dialog',
    templateUrl: './edit-to-do-dialog.component.html',
    styleUrls: ['./edit-to-do-dialog.component.css']
})
export class EditToDoDialogComponent implements OnInit {

    @Input() toDoData = {taskName: '', extraNote: '', taskCompleted: false, dueDate: Date};

    constructor(
        public dialogRef: MatDialogRef<EditToDoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private todoService: TodoService) {

    }

    ngOnInit() {
    }

    updateToDo(id, todo) {
        this.dialogRef.close();
        todo.taskName = this.toDoData.taskName;
        todo.extraNote = this.toDoData.extraNote;
        todo.dueDate = this.toDoData.dueDate;

        this.todoService.updateToDo(id, todo)
            .subscribe((res) => {
            }, (err) => {
                console.log(err);
            });
    }

    cancel() {
        this.dialogRef.close();
    }
}
