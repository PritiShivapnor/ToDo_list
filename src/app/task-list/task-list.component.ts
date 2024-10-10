import { Component, OnInit } from '@angular/core';
// import { TaskService } from './task.service';
import { TaskService } from '../task.service'; // Adjust if necessary
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
// export class TaskListComponent implements OnInit {
//   tasks: any[] = [];

//   constructor(private taskService: TaskService) {}

//   ngOnInit(): void {
//     this.getTasks();
//   }

//   getTasks() {
//     this.taskService.getTasks().subscribe((tasks: any) => {
//       this.tasks = tasks;
//     });
//   }

//   editTask(task: any) {
//     // Navigate to the form with task data for editing
//   }

//   deleteTask(id: number) {
//     this.taskService.deleteTask(id).subscribe(() => {
//       this.getTasks();  // Refresh the task list
//     });
//   }
// }
export class TaskListComponent {
tasks: any;
deleteTask(arg0: any) {
throw new Error('Method not implemented.');
}
editTask(_t5: any) {
throw new Error('Method not implemented.');
}
  constructor(private taskService: TaskService) { 
    // Now you can use taskService in your component methods
  }
  
  // Example method to get tasks
  getTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      // handle tasks here
    });
  }
}
