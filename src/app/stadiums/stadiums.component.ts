import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
})
export class StadiumsComponent implements OnInit {
  stadiums: String[];
  constructor(private http: HttpClient) { }
  url = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

  ngOnInit() {
    this.http.get(this.url).subscribe(res =>
      this.displayData(res)
  );
  }

  displayData(data) {
    this.stadiums = data.stadiums;
    console.log(data);
}

}
