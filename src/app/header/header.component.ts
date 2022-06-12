import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyComponent } from '../currency/currency.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private main: CurrencyComponent) {}

  usd: Currency[] = this.main.filteredArray$;
  ngOnInit(): void {}
}
