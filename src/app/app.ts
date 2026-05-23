import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Expenses } from './expenses/expenses';
import { Income } from './income/income';
import { Summary } from './summary/summary';

@Component({
  selector: 'app-root',
  imports: [Expenses, Income, Summary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
