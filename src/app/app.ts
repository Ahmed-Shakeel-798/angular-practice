import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `
    <app-home />

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
