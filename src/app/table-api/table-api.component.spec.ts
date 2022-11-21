import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApiComponent } from './table-api.component';

describe('TableApiComponent', () => {
  let component: TableApiComponent;
  let fixture: ComponentFixture<TableApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
