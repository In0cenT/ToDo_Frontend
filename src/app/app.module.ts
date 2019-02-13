import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';

import {MatDialogModule} from '@angular/material';


import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,


} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NewToDoDialogComponent} from './new-to-do-dialog/new-to-do-dialog.component';
import {EditToDoDialogComponent} from './edit-to-do-dialog/edit-to-do-dialog.component';


const materialModules = [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,

];

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        FooterComponent,
        HeaderComponent,
        NewToDoDialogComponent,
        EditToDoDialogComponent
    ],
    imports: [
        materialModules,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule
    ],
    exports: [
        materialModules,
        BrowserAnimationsModule,
    ],
    entryComponents: [
        NewToDoDialogComponent,
        EditToDoDialogComponent
    ],
    providers: [
        TodoListComponent,
        MatDatepickerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
