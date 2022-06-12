import {Component, OnInit} from '@angular/core';
import {CalculateService} from "../services/calculate.service";


export class Currency {
  constructor(
    public r030: number,
    public txt: string,
    public rate: number,
    public cc: string,
    public exchangedate: string
  ) {
  }
}

// export interface Config {
//   "r030": number,
//   "txt": string,
//   "rate": number,
//   "cc": string,
//   "exchangedate": string
// }


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  constructor(private api: CalculateService) {
  }

  currencys = this.api.currencys

  amountIget: string | null = null;
  amountIhave: string | null = null;
  ifActive: boolean = false
  from: string | null = null;
  to: string | null = null;


  format = (number: number) => {
    return number.toFixed(4)
  }

  calculate(event: any,) {
    let value = event.target.value
    this.ifActive ? this.amountIhave = this.format((Number(this.from) * Number(value)) / Number(this.to)) :
      this.amountIget = this.format(Number(this.to) * Number(value) / Number(this.from))
  }

  onFocus(isActive: boolean): void {
    this.ifActive = isActive
    this.amountIget = ''
    this.amountIhave = '';
  }

  ngOnInit(): void {
    this.api.getCurrencys()
    console.log(this.api.currencys)

  }

}
