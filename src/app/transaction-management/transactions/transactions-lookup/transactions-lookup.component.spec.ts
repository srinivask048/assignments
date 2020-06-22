import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsLookupComponent } from './transactions-lookup.component';

describe('TransactionsLookupComponent', () => {
  let component: TransactionsLookupComponent;
  let fixture: ComponentFixture<TransactionsLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
