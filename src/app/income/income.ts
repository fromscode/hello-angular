import { Component, EventEmitter, Output, signal } from '@angular/core';


@Component({
  selector: 'app-income',
  imports: [],
  templateUrl: './income.html',
  styleUrl: './income.css',
})
export class Income {
  value = signal(0);
  
  handleInput(e: Event) {
    this.value.set(+(e.target as HTMLInputElement).value)
  }

  @Output()
  incomeEmitter = new EventEmitter<number>();

  handleAdd(e: Event) {
    e.preventDefault()
    this.value() >0 && this.incomeEmitter.emit(this.value());
    this.value.set(0)
  }

}
