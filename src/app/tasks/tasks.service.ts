import { Inject, Injectable, signal } from "@angular/core";

import { Task } from "./task.model";

@Injectable({
    providedIn: 'root'}) //root menas: it can be injected in anywhere in the application
export class TasksService {
    tasks = signal<Task[]>([]);//this signal will manage an array of tasks

    addTask(taskData:{title: string, description: string}){
        const newTask:Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        }
        this.tasks.update((oldTasks) => [...oldTasks, newTask])
    }
}