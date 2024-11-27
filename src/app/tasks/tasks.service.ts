import { inject, Inject, Injectable, signal } from "@angular/core";

import { Task, TaskStatus } from "./task.model";
import { LogginService } from "../loggin.service";

@Injectable({
    providedIn: 'root'}) //root menas: it can be injected in anywhere in the application
export class TasksService {
    private logginService = inject(LogginService); 
    //you could add a service in a service that 
    //the same way that you could add a component                                            

    private tasks = signal<Task[]>([]);
    //this signal will manage an array of tasks, starts empty, then fills up with addTask
    //function, which is called in the new-taks.compoent
    //private makes this property only accessible in this class

    allTasks = this.tasks.asReadonly();
    //a publicly avaiable property that will return the array of tasks, but that cant be changed

    addTask(taskData:{title: string, description: string}){
        const newTask:Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        }
        this.tasks.update((oldTasks) => [...oldTasks, newTask])
        this.logginService.log('Added task' + taskData.title);
    }

    updateTaskStatus(taskId:string, newStatus:TaskStatus) {
        this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? { 
            ...task, 
            staus:newStatus } : task
            )
);
        this.logginService.log('Cahnge status task' + newStatus);
      }
}