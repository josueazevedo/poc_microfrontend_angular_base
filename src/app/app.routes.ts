import { MFE_1, MFE_2, MFE_3 } from './config/mfe.config';
import { Routes } from '@angular/router';
import { MfeInjectorComponent } from './core/components/mfe-injector/mfe-injector.component';

export const routes: Routes = [
  {
    path: 'mfe1',
    component: MfeInjectorComponent,
    data: {
      injector: MFE_1,
    },
  },
  {
    path: 'mfe1/:id',
    component: MfeInjectorComponent,
    data: {
      injector: MFE_1,
    },
  },
  {
    path: 'mfe2',
    component: MfeInjectorComponent,
    data: {
      injector: MFE_2,
    },
  },
  {
    path: 'mfe3',
    component: MfeInjectorComponent,
    data: {
      injector: MFE_3,
    },
  },
];
