import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {
  @Input()
  income = 10;

  @Input()
  expenses= 5;
}
