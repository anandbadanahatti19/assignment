import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';

import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card'; 
import { ReactiveFormsModule } from '@angular/forms';
import { TableApiComponent } from './table-api/table-api.component';
import {MatMenuModule} from '@angular/material/menu';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    TableComponent,
    TableApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
