import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditToDoDialogComponent} from '../edit-to-do-dialog/edit-to-do-dialog.component';
import {TodoListService} from '../shared/todo-list-service';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    constructor(private dialog: MatDialog, private todoListService: TodoListService, private test: TodoListService) {
    }


    @Input() toDoData = {taskName: '', taskCompleted: false, date: Date};


    ngOnInit() {
    }

    openDialog(todo): void {
        //console.log('TodoList Dialog Open: ', todo);
        const dialogRef = this.dialog.open(EditToDoDialogComponent, {
            data: {
                todoUpdate: todo,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
        });
    }
}
