/*import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-wit-notes-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[taskStatusOptionsProvider]
  //providers:[{provide:TASK_STATUS_OPTIONS , useValue:TaskStatusOptions}] 
  //One Way to inject NON Service Providers
  //In order to inject the TaskStatusOption you need to use a provider token
  //USEvALUE: 
})
export class TasksListWithNotesComponent {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  tasks = this.tasksService.allTasks;
  taskStatusOptions = inject(TASK_STATUS_OPTIONS); //This is provided fo, so we can use it

  newTasks = computed(() => {
  switch (this.selectedFilter()) {
    case 'open':
      return this.tasksService
      .allTasks()
      .filter((task) => task.status === 'OPEN');
    case 'in-progress':
      return this.tasksService
      .allTasks()
      .filter(
        (task) => task.status === 'IN_PROGRESS'
      );
    case 'done':
      return this.tasksService
      .allTasks()
      .filter(
        (task) => task.status === 'DONE'
      );
    default:
      return this.tasksService.allTasks;
  }
 })
 //returns a new signal 
 //returns a new computed signal when any of the other signals change

  constructor() {}

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
*/