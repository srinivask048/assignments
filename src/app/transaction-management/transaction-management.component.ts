import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.scss']
})
export class TransactionManagementComponent implements OnInit {

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
    this._commonService.setInitialAppState();
  }

}
