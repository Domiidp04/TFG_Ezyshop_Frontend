import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-money',
  standalone: true,
  imports: [],
  templateUrl: './money.component.html',
  styleUrl: './money.component.scss'
})
export class MoneyComponent {

  @Input() public money: number;
}
