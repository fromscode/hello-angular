import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {
  value = signal(0);

  @Output()
  expensesEmitter = new EventEmitter<number>();

  handleInput(e: Event) {
    this.value.set(+(e.target as HTMLInputElement).value)
  }

  handleAdd(e: Event) {
    e.preventDefault();
    this.value() >0 && this.expensesEmitter.emit(this.value());
    this.value.set(0)
  }
}
