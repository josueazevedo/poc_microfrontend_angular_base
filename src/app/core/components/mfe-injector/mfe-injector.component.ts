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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadElement();
    this.onRouterChange();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private onRouterChange(): void {
    this.route.params.subscribe((params: any) => {
      console.log('onRouterChange', params?.id, window.location.pathname);
      document.dispatchEvent(
        new CustomEvent(`${this.elementProps.name}:onpopstate`, {
          detail: {
            path: window.location.pathname,
          },
        })
      );
    });
  }

  private loadElement(): void {
    this.elementProps = this.route.snapshot.data['injector'];
    this.injectorService.inject(this.box, this.elementProps);
    this.injectorService.addAttributes('path', window.location.pathname);
    this.loadListener(this.elementProps.tag);
  }

  private loadListener(tag: string): void {
    customElements.whenDefined(tag).then(() => {
      console.log('element loaded');
    });
  }
}
