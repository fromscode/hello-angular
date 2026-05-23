import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {
  expenses = 0;

  handleInput(e: Event) {
    this.expenses = +(e.target as HTMLInputElement).value;
  }
}
