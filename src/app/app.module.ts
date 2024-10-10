import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for using ngModel
import { AppRoutingModule } from './app-routing.module';  // Import your routing module
import { TaskListComponent } from './task-list/task-list.component';  // Import task list component
import { TaskFormComponent } from './task-form/task-form.component';  // Import task form component

@NgModule({
  imports: [
    BrowserModule,  // Import BrowserModule for web applications
    FormsModule,  // Import FormsModule for template-driven forms
    AppRoutingModule,  // Include the routing module for navigation
    // Do not include AppComponent here
  ],
//   declarations: [
//     TaskListComponent,  // Declare task list component
//     TaskFormComponent  // Declare task form component
//   ],
  providers: [],  // Add any services you want to inject here
  bootstrap: []  // Leave this empty, AppComponent will be bootstrapped directly in main.ts
})
export class AppModule { }
