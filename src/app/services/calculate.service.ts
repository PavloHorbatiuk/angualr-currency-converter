import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currency} from "../currency/currency.component";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private useURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json'


  constructor(private http: HttpClient) {
  }

  getCurrencys(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.useURL)

  }

  getOneCurrency(array: Currency[], id: number) {
    return array.find(f => f.r030 === id)
  }
}
