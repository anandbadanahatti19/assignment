import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { TableApiComponent } from './table-api/table-api.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'table-api', component: TableApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
