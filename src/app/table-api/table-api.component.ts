import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
const API_URL = "https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json";
@Component({
  selector: 'app-table-api',
  templateUrl: './table-api.component.html',
  styleUrls: ['./table-api.component.scss']
})
export class TableApiComponent implements OnInit {
  tableData :object ={}; 
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
   this.http.get<any>(API_URL).subscribe(response => {
    console.log(response);
    this.tableData =  response.cookies;
 
    });
    
  // this.http.get(API_URL).subscribe(res => {
  //   const transformedData = Object.keys(res).map( i => i.cookies);
  // })
  }
 

}
