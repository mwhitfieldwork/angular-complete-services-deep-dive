/*import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptions = {
  value:'OPEN' | 'IN_PROGRESS' | 'DONE';
  text:string;
  taskStatus:TaskStatus;
}

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('task-status-options');
//INJECTION TOKENS USE ALL CAPS
//Istantiate a new injection token

export const TaskStatusOptions:TaskStatusOptions[] = [
  { value: 'OPEN', taskStatus: 'OPEN', text: 'Open' },
  { value: 'IN_PROGRESS', taskStatus: 'IN_PROGRESS', text: 'IN-PROGRESS' },
  { value: 'DONE', taskStatus: 'DONE', text: 'Completed' },
];

//Export the providers in the MOdel of the CUSTOM INJECTION TOKEN
export const taskStatusOptionsProvider: Provider = { //Setting the Type Provider here to make sure the object is correct, with no typos
  provide:TASK_STATUS_OPTIONS, 
  useValue:TaskStatusOptions
} 

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
*/