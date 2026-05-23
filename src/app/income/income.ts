import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-income',
  imports: [],
  templateUrl: './income.html',
  styleUrl: './income.css',
})
export class Income {
  income = 0;
  
  handleInput(e: Event) {
    this.income = +(e.target as HTMLInputElement).value
  }
}
