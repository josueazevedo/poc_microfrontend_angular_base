import { Route } from '@angular/router';

export const homeRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
];
