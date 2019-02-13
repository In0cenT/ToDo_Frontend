import {Injectable, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TodoService} from './todo.service';
import {map, shareReplay} from 'rxjs/operators';
import {ToDo} from './todo.model';


@Injectable({providedIn: 'root'})
export class TodoListService {

    showCompleted = false;

    @Input() toDoData = {taskName: '', extraNote: '', taskCompleted: false, dueDate: Date};

    constructor(private todoService: TodoService) {
        this.getToDos();
    }

    private readonly todoListSource = new BehaviorSubject<ToDo[]>([]);

    readonly todos$ = this.todoListSource.asObservable().pipe(
        shareReplay(1)
    );

    readonly completedToDos$ = this.todos$.pipe(
        shareReplay(1),
        map(todos => this.todos.filter(todo => todo.taskCompleted))
    );
    readonly incompletedToDos$ = this.todos$.pipe(
        shareReplay(1),
        map(todos => this.todos.filter(todo => !todo.taskCompleted))
    );

    get todos(): ToDo[] {
        return this.todoListSource.getValue();
    }

    set todos(val: ToDo[]) {
        this.todoListSource.next(val);
    }


    getToDos() {
        this.todoService.getToDos()
            .subscribe((data: []) => {
                console.log('TodoModel List get Todos Service: ', data);
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
