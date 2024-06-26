import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ElementProps,
  MfeInjectorService,
} from '../../services/mfe-injector/mfe-injector.service';
import { MFE_CONFIG } from '../../../config/mfe.config';
import { CustomEventsService } from '../../services/custom-events/custom-events.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-mfe-injector',
  standalone: true,
  imports: [],
  templateUrl: './mfe-injector.component.html',
  styleUrl: './mfe-injector.component.scss',
})
export class MfeInjectorComponent implements OnInit, OnDestroy {
  @ViewChild('box', { static: true })
  private box!: ElementRef;
  private elementProps!: ElementProps;

  private subs = new Subscription();

  constructor(
    private injectorService: MfeInjectorService,
    private route: ActivatedRoute,
    private events: CustomEventsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadElement();
    this.onRouterChange();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private onRouterChange(): void {
    this.route.params.subscribe((_) => {
      this.events.dispatch(`${this.elementProps.name}:onpopstate`, {
        path: this.getBasePath(),
      });
    });
  }

  private loadElement(): void {
    this.loadingService.show();
    this.elementProps = this.route.snapshot.data['injector'];
    this.injectorService.inject(this.box, this.elementProps);
    this.injectorService.addAttributes('path', this.getBasePath());
    this.loadListener(this.elementProps.tag);
  }

  private getBasePath(): string {
    return window.location.pathname.replace(MFE_CONFIG.basePath, '');
  }

  private loadListener(tag: string): void {
    customElements.whenDefined(tag).then(() => {
      this.loadingService.hide();
    });
  }
}
