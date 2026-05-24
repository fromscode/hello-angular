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
  income = signal(0);
  expenses = signal(0);

  handleIncomeChange(val: number){
    this.income.update(prev => prev + val);
  }

  handleExpensesChange(val: number){
    this.expenses.update(prev => prev + val);
  }
} 
