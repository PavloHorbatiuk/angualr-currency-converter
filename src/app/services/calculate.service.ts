import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../currency/currency.component";


@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) {
  }

  currencys: Currency[] = []


  getCurrencys() {
    this.http.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
      .subscribe((response) => {
        this.currencys = response
        console.log(this.currencys)
        this.getUsd()
      })
  }

  getUsd() {
    return this.currencys.find(f => f.r030 === 840)
  }

}
