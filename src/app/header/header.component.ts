import {Component, Input, OnInit, Inject} from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {ToDoDialogComponent} from '../to-do-dialog/to-do-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() toDoData = {taskName: '', extraNote: '', taskCompleted: false, dueDate: Date};

    ngOnInit() {
    }

    constructor(private todoService: TodoService, private dialog: MatDialog) {
    }

    addToDo() {
        this.todoService.addToDo(this.toDoData).subscribe((result) => {
            this.todoService.addToDo(this.toDoData);
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ToDoDialogComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
