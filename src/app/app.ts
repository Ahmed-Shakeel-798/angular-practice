import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header],
  template: `
    <app-header />

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
