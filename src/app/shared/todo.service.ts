import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodoService {
    public API = 'http://localhost:8080/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    constructor(private http: HttpClient) {
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    getToDos(): Observable<any> {
        return this.http.get(this.API + 'todos').pipe(
            map(this.extractData));
    }

    getToDo(id): Observable<any> {
        return this.http.get(this.API + 'todos/' + id).pipe(
            map(this.extractData));
    }

    addToDo(todo): Observable<any> {
        return this.http.post<any>(this.API + 'todos', JSON.stringify(todo), this.httpOptions).pipe(
            tap((todo) => console.log(`added todo w/ id=${todo.id}`)),
            catchError(this.handleError<any>('addTodo'))
        );
    }

    updateToDo(id, todo): Observable<any> {
        return this.http.put(this.API + 'todos/' + id, JSON.stringify(todo), this.httpOptions).pipe(
            tap(_ => console.log(`updated todo id=${id}`)),
            catchError(this.handleError<any>('updateTodo'))
        );
    }

    deleteToDo(id): Observable<any> {
        return this.http.delete<any>(this.API + 'todos/' + id, this.httpOptions).pipe(
            tap(_ => console.log(`deleted todo id=${id}`)),
            catchError(this.handleError<any>('deleteToDo'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
