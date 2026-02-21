import { Component, signal } from '@angular/core';
import { Counter } from '../components/counter/counter';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  message = signal("Welcome Ahmed!");
}
