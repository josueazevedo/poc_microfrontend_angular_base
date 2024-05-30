import { isDevMode } from '@angular/core';
import { ElementProps } from '../core/services/mfe-injector/mfe-injector.service';

export const MFE_1: ElementProps = {
  name: 'mfe1',
  tag: 'mfe-one',
  url: isDevMode() ? 'http://localhost:4201' : 'http://...',
};

export const MFE_2: ElementProps = {
  name: 'mfe2',
  tag: 'mfe-two',
  url: isDevMode() ? 'http://localhost:4202' : 'http://...',
};

export const MFE_3: ElementProps = {
  name: 'mfe3',
  tag: 'mfe-three',
  url: isDevMode() ? 'http://localhost:4203' : 'http://...',
};
