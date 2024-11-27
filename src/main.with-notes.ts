import { bootstrapApplication } from '@angular/platform-browser';
//import { InjectionToken } from '@angular/core';
import { AppComponent } from './app/app.component';

// you can create youre own towke:
//const TaskServiceToken = new InjectionToken<TaskService>('tasks-service-token');
//this is the name of the token that needs to be used

bootstrapApplication(AppComponent, {
    //providers:[{ provide: TaskServiceToken, useClass: TaskService }]
    //TheNameOfTheService - is the Depencey Inection token
    //provides a depencency token

    providers: []// lets angular now that a piece of code is injectable!
                 //When the prodiver is included herere it will not be apart of angulr tree shaking
                 // so when it looks to optimize performace, the service provided here will always be
                 // included, even if not needed
                 //@injectable with a provider of root is better
}).catch((err) => console.error(err));
