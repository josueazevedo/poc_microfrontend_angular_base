import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomEventsService } from '../../../core/services/custom-events/custom-events.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit, OnDestroy {
  public loading = false;

  constructor(private events: CustomEventsService) {}
  ngOnInit(): void {
    this.events.listen('loading', this.onChangeLoading);
  }
  ngOnDestroy(): void {
    this.events.unlisten('loading', this.onChangeLoading);
  }

  onChangeLoading = (event: Event) => {
    this.loading = (event as CustomEvent)?.detail?.show;
  };
}
