import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoList: Array<any>;

    constructor(private todoService: TodoService) {
    }

    @Input() toDoData = {taskName: '', taskCompleted: false, date: Date};

    ngOnInit() {
        this.getToDos();
    }

    getToDos() {
        this.todoList = [];
        this.todoService.getToDos().subscribe((data: []) => {
            console.log(data);
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
}
