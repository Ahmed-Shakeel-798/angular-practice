import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count = input<number>(); // Signal input
  message = input<string>();

  keyPress = signal('');

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.keyPress.set(value);
}
}
