import { Inject, Injectable, signal } from "@angular/core";

import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn: 'root'}) //root menas: it can be injected in anywhere in the application
export class TasksService {
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
    }

    updateTaskStatus(taskId:string, status:TaskStatus) {
        this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? { 
            ...task, 
            staus:status } : task));
      }
}