import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {ADD_TRANSACTION} from '../../store/actions';
import { IAppState } from 'src/app/store/store';
import {ITransaction} from '../../store/transaction';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @select() transactions;
  model: ITransaction = {
    amount: '',
    categoryCode: '',
    merchant: '',
    merchantLogo: '',
    transactionDate: '',
    transactionType: ''
  };
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit(): void {
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_TRANSACTION, transaction: this.model});
  }
}
