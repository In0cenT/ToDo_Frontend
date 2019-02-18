import {Component, OnInit} from '@angular/core';
import {NewToDoDialogComponent} from '../new-to-do-dialog/new-to-do-dialog.component';
import {MatDialog} from '@angular/material';
import {TodoListService} from '../shared/todo-list-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    ngOnInit() {
    }

    constructor(private todoListService: TodoListService, private dialog: MatDialog) {
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(NewToDoDialogComponent, {});
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            this.todoListService.getToDos();
        });
    }
}
