import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/task-list.component';
// import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  // providers: [TasksService]
  //Element injector, it allows you to set up values, that should be injectable
                // that a t tied to the Element Injector that belongs to this component
                //child compoentents will also have access
                //the service would be restricted to this component and childs
                //------------------------------------------------------------------------------
                // 1. SCOPE now this task service is only available to this component and children
                //2. Every instance where you provide the service in the comoentn, means that you will 
                // have separate instances of the service
})
export class TasksComponent {}