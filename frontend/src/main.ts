import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ContentComponent } from './app/components/content/content.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CL';

bootstrapApplication(ContentComponent, appConfig)
  .catch((err) => console.error(err));

registerLocaleData(localeEs, 'cl');