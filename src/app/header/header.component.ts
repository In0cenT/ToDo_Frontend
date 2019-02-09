import {Component, OnInit} from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {NewToDoDialogComponent} from '../new-to-do-dialog/new-to-do-dialog.component';
import {MatDialog} from '@angular/material';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    ngOnInit() {
    }

    constructor(private todoService: TodoService, private dialog: MatDialog, private todoList: TodoListComponent) {
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(NewToDoDialogComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.todoList.getToDos();
        });
    }
}
