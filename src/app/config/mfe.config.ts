import { isDevMode } from '@angular/core';
import { ElementProps } from '../core/services/mfe-injector/mfe-injector.service';

export const MFE_CONFIG = {
  basePath: isDevMode() ? '' : '/poc_microfrontend_angular_base',
};

export const MFE_1: ElementProps = {
  name: 'mfe1',
  tag: 'mfe-one',
  url: isDevMode()
    ? 'http://localhost:4201'
    : 'https://josueazevedo.github.io/poc_microfrontend_angular_mfe1',
};
