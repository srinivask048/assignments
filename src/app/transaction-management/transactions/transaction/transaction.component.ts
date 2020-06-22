import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ITransaction } from 'src/app/store/transaction';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  // transactions;
  @select('transactions') transxns;
  txns: Array<ITransaction>;
  @select() transactions$: Observable<ITransaction[]>;
  constructor(private ngRedux: NgRedux<IAppState>) {
    // this.ngRedux.select<ITransaction[]>('transactions').subscribe((items: Array<ITransaction>) => {
    //   this.txns = items;
    //   console.log(this.ngRedux.select());
    // });
   }

  ngOnInit(): void {
    // this.transactions$.subscribe(currentState => {
    //   this.txns = currentState;
    //   console.log(this.transactions$);
    // });
    // this.transactions$ = this.ngRedux.select('transaction');
  }

}
