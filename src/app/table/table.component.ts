// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import { MatTableDataSource, MatSort } from '@angular/material';
// import { DataSource } from '@angular/cdk/table';
// export interface Data {
//   name: string;
//   price: number;
//   category: string;
// }
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.scss']
// })


// export class TableComponent implements OnInit {
//   tableData;
//   displayedColumns: string[] = ['name', 'price', 'category'];
//   // displayedColumns: string[] = ['created', 'state', 'number', 'title'];
//    data = {
//     "cookies": [ 
//       { "name": "Chocolate Chip", "price": "$2.49", "category": "Standard" },
//       { "name": "Sugar", "price": "$1.79", "category": "Standard" },
//       { "name": "Snickerdoodle", "price": "$2.49", "category": "Standard" },
//       { "name": "Oatmeal Raisin", "price": "$2.99", "category": "Standard" },
//       { "name": "Peanut Butter", "price": "$2.99", "category": "Standard" },
//       { "name": "White Chocolate Macadamia", "price": "$3.99", "category": "Premium" },
//       { "name": "Red Velvet", "price": "$3.49", "category": "Premium" },
//       { "name": "Black and White", "price": "$3.49", "category": "Premium" },
//       { "name": "Triple Chocolate", "price": "$3.99", "category": "Premium" },
//       { "name": "White Chocolate Coconut Divine", "price": "$5.99", "category": "Signature" },
//       { "name": "Dark Chocolate Pistachio Sea Salt", "price": "$5.49", "category": "Signature" },
//       { "name": "Brown Butter Bourbon Spice", "price": "$5.49", "category": "Signature" },
//       { "name": "Bacon Chocolate Chip", "price": "$5.99", "category": "Signature" }
//     ]
//   }
//   dataSource = ELEMENT_DATA;
//   // dataSource = this.data.cookies;
  
//   constructor(private dataService : ApiService) {
    
//     this.tableData = this.data.cookies;
//     console.log(this.data.cookies) ;
    
//   } 
   

//   ngOnInit(): void {
//   }

// }



import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
export interface ProductList {
  name: string;
  price: number;
  category: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
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
  tableData :object ={}; 

  displayedColumns: string[] = ['name', 'price', 'category'];
  // dataSource= new MatTableDataSource<any>();
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
   this.http.get<any>(API_URL).subscribe(response => {
    console.log(response);
    this.tableData =  response.cookies;
  // this.dataSource = new MatTableDataSource<any>(this.tableData);
    
    });
  }
}