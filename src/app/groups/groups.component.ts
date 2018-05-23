import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
})
export class GroupsComponent implements OnInit {
  groups: Object[];
  constructor(private http: HttpClient) { }
  url = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

  ngOnInit() {
    this.http.get(this.url).subscribe(res =>
      this.displayData(res)
    );
  }

  displayData(data) {
    this.groups = data.groups;
    console.log(data);
}

}
