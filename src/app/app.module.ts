import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import { TestingComponent } from './testing/testing.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsdSlrPipe } from './pipes/usd-slr.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    FormComponent,
    TodoListComponent,
    ChildComponent,
    UserDetailsComponent,
    UsdSlrPipe,
    ReactiveFormComponent,
    RedElDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
