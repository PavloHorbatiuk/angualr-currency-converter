import {Component, OnInit} from '@angular/core';
import {CalculateService} from "../services/calculate.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api: CalculateService) {

  }


  ngOnInit(): void {
    console.log("header rendered")
    this.api.getUsd()
  }

}
