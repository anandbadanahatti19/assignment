import {LiveAnnouncer} from '@angular/cdk/a11y';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
// ];
const API_URL = "https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json";

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent  {
  tableData:any; 

  displayedColumns: string[] = ['name', 'price', 'category'];
  // dataSource= new MatTableDataSource<any>();
  constructor(private http : HttpClient,private _liveAnnouncer: LiveAnnouncer) { }
  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

  ngOnInit(): void {
   this.http.get<any>(API_URL).subscribe(response => {
    console.log(response);


    // this.tableData 
    let data =  response.cookies;
    this.tableData = data;

    
    });
  }
  announceSortChange(sortState: Sort ) {
    console.log(sortState);
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}