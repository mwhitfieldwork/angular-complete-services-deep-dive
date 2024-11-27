import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: []// lets angular now that a piece of code is injectable!
                 //When the prodiver is included herere it will not be apart of angulr tree shaking
                 // so when it looks to optimize performace, the service provided here will always be
                 // included, even if not needed
                 //@injectable with a provider of root is better
}).catch((err) => console.error(err));
