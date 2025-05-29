import { Route, Routes } from '@angular/router';
import { MfeInjectorComponent } from '../core/components/mfe-injector/mfe-injector.component';
import { ElementProps } from '../core/services/mfe-injector/mfe-injector.service';

export const providerElementsRoutes = (
  ...elements: ElementProps[]
): Route[] => {
  return elements.flatMap((element) => [
    {
      path: element.name,
      component: MfeInjectorComponent,
      data: {
        injector: element,
      },
    },
    {
      path: `${element.name}/:id`,
      component: MfeInjectorComponent,
      data: {
        injector: element,
      },
    },
  ]);
};
