import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { CustomEventsService } from '../custom-events/custom-events.service';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(
    private router: Router,
    private eventsService: CustomEventsService
  ) {
    this.registreNavigateEvent();
  }

  private registreNavigateEvent(): void {
    this.eventsService.listen('external_router', (e) => {
      const path = (e as CustomEvent)?.detail?.path;
      this.router.navigate([path]);
    });
  }
}
