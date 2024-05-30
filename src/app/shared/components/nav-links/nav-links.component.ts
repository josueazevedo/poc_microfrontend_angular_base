import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss',
})
export class NavLinksComponent {}
