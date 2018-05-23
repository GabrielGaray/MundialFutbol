import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-paises',
    templateUrl: './paises.component.html',
})
export class PaisesComponent implements OnInit {
    teams: String[];
    constructor(private http: HttpClient) { }
    url = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

    ngOnInit() {
        this.http.get(this.url).subscribe(res =>
            this.displayData(res)
        );
    }

    displayData(data) {
        this.teams = data.teams;
        console.log(data);
    }
}


