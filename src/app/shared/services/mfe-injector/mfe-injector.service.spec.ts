import { TestBed } from '@angular/core/testing';

import { MfeInjectorService } from './mfe-injector.service';

describe('MfeInjectorService', () => {
  let service: MfeInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
