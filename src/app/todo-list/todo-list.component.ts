import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {MatDialog} from '@angular/material';
import {EditToDoDialogComponent} from '../edit-to-do-dialog/edit-to-do-dialog.component';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoList: Array<any> = [];

    constructor(private todoService: TodoService, private dialog: MatDialog) {
    }


    @Input() toDoData = {taskName: '', taskCompleted: false, date: Date};


    ngOnInit() {
        this.getToDos();
    }

    getToDos() {
        this.todoList = [];
        this.todoService.getToDos()
            .subscribe((data: []) => {
                console.log('Todo List get Todos ', data);
                this.todoList = data;
            });
    }

    delete(id) {
        this.todoService.deleteToDo(id)
            .subscribe(res => {
                    this.getToDos();
                }, (err) => {
                    console.log(err);
                }
            );
    }

    completed(id, todo) {
        todo.taskCompleted = !todo.taskCompleted;
        this.todoService.updateToDo(id, todo)
            .subscribe(res => {
                this.getToDos();
            }, (err) => {
                console.log(err);
            });
    }

    openDialog(todo): void {
        console.log('TodoList Dialog Open: ', todo);
        const dialogRef = this.dialog.open(EditToDoDialogComponent, {
            data: {
                todoUpdate: todo,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    printList() {
        console.log('print list button', this.todoList);
    }

    callGetToDo() {
        this.getToDos();
    }
}
