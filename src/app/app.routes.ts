import { MFE_1 } from './config/mfe.config';
import { Routes } from '@angular/router';
import { MfeInjectorComponent } from './core/components/mfe-injector/mfe-injector.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.homeRoutes),
  },
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
];
