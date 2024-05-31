import { Routes } from '@angular/router';
import { providerElementsRoutes } from './config/mfe-routes.config';
import { MFE_1, MFE_2 } from './config/mfe.config';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.homeRoutes),
  },
  ...providerElementsRoutes(MFE_1, MFE_2),
];
