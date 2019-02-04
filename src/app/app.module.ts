import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';

import { MatDialogModule } from '@angular/material';


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
}
from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ToDoDialogComponent } from './to-do-dialog/to-do-dialog.component';


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
];

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        FooterComponent,
        HeaderComponent,
        ToDoDialogComponent
    ],
    imports: [
        materialModules,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule
    ],
    exports: [
        materialModules,
        BrowserAnimationsModule,
    ],
    entryComponents: [
      ToDoDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
