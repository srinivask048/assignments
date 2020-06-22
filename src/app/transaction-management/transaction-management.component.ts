import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.scss']
})
export class TransactionManagementComponent implements OnInit {
  @select() transactions;
  constructor(private _commonService: CommonService,
              private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this._commonService.setInitialAppState();
  }

}
