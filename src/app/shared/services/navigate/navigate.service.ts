import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MfeInjectorService } from '../mfe-injector/mfe-injector.service';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router, private inj: MfeInjectorService) {
    this.registreNavigateEvent();
  }

  private registreNavigateEvent(): void {
    document.addEventListener('external_router', (e) => {
      const path = (e as CustomEvent)?.detail?.path;
      this.router.navigate([path]);
    });
  }
}
