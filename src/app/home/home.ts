import { Component, signal } from '@angular/core';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  count = signal(0);
  message = signal("Welcome Ahmed!");

  increment() {
    this.count.update(v => v + 1);
  }
}
