import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counterValue = signal(0);

  increment() {
    this.counterValue.update(value => value + 1);
  }

  decrement() {
    this.counterValue.update(value => value > 0 ? value - 1 : value);
  }

  reset() {
    this.counterValue.set(0);
  }
}
