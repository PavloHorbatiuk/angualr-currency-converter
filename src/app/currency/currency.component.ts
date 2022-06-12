import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../services/calculate.service';

export class Currency {
  constructor(
    public r030: number,
    public txt: string,
    public rate: number,
    public cc: string,
    public exchangedate: string
  ) {}
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currencys: Currency[];
  filteredArray$: Currency[];

  constructor(private service: CalculateService) {
    this.currencys = [];
    this.filteredArray$ = [];
  }

  amountIget: string | null = null;
  amountIhave: string | null = null;
  ifActive: boolean = false;
  from: string | null = null;
  to: string | null = null;

  format = (number: number) => {
    return number.toFixed(4);
  };

  calculate(event: any) {
    let value = event.target.value;
    this.ifActive
      ? (this.amountIhave = this.format(
          (Number(this.from) * Number(value)) / Number(this.to)
        ))
      : (this.amountIget = this.format(
          (Number(this.to) * Number(value)) / Number(this.from)
        ));
  }

  onFocus(isActive: boolean): void {
    this.ifActive = isActive;
    this.amountIget = '';
    this.amountIhave = '';
  }

  getCUrrency(): void {
    const currencyObservable = this.service.getCurrencys();
    currencyObservable.subscribe((data: Currency[]) => {
      this.currencys = data;
    });
  }

  getOneCurrency(): void {
    this.filteredArray$ = this.currencys.filter((f) => f.r030 === 840);
  }

  ngOnInit(): void {
    this.getCUrrency();
    this.getOneCurrency();
  }
}
