import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {
  value = 0;

  @Output()
  expensesEmitter = new EventEmitter<number>();

  handleInput(e: Event) {
    this.value = +(e.target as HTMLInputElement).value
  }

  handleAdd(e: Event) {
    e.preventDefault();
    this.value >0 && this.expensesEmitter.emit(this.value);
    this.value = 0;
  }
}
