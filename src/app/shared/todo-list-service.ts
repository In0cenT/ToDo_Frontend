import {Injectable, Input} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import {shareReplay} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class TodoListService {

    @Input() toDoData = {taskName: '', extraNote: '', taskCompleted: false, dueDate: Date};


    private readonly todoListSource = new BehaviorSubject<Todo[]>([]);

    constructor(private todoService: TodoService) {
        this.getToDos();
    }

    readonly todos$ = this.todoListSource.asObservable().pipe(
        shareReplay(1)
    );

    get todos(): Todo[] {
        return this.todoListSource.getValue();
    }

    set todos(val: Todo[]) {
        this.todoListSource.next(val);
    }


    getToDos() {
        this.todoService.getToDos()
            .subscribe((data: []) => {
                console.log('Todo List get Todos Service: ', data);
                this.todos = data;
            });
    }

    addToDo() {

        this.todoService.addToDo(this.toDoData)
            .subscribe((result) => {
                /*console.log(result);*/
            });

    }

    deleteToDo(id) {
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
}
