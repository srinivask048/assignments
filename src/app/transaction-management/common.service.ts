import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgRedux} from '@angular-redux/store';
import {ADDALL_TRANSACTIONS} from '../store/actions';
import { IAppState } from '../store/store';
import { ITransaction } from '../store/transaction';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient,
              private ngRedux: NgRedux<IAppState>) { }

  setInitialAppState() {
    let transactionData: ITransaction[];
    this._http.get('../../../assets/Data/Api/transactions.json').subscribe(respData => {
      transactionData = respData['data'];
    });
    this.ngRedux.dispatch({type: ADDALL_TRANSACTIONS, transactions: transactionData});
  }
}
