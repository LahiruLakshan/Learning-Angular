import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import { TestingComponent } from './testing/testing.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsdSlrPipe } from './pipes/usd-slr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    FormComponent,
    TodoListComponent,
    ChildComponent,
    UserDetailsComponent,
    UsdSlrPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
