import { Component, signal } from '@angular/core';
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
  income = 0;
  expenses = 0;

  handleIncomeChange(val: number){
    this.income += val;
  }

  handleExpensesChange(val: number){
    this.expenses += val;
  }
} 
