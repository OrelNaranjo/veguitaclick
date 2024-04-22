import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ContentComponent } from './app/components/content/content.component';

bootstrapApplication(ContentComponent, appConfig)
  .catch((err) => console.error(err));
