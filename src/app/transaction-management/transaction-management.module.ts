import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionManagementRoutingModule } from './transaction-management-routing.module';
import { TransactionManagementComponent } from './transaction-management.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsLookupComponent } from './transactions/transactions-lookup/transactions-lookup.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';


@NgModule({
  declarations: [TransactionManagementComponent, TransactionsComponent, TransactionsLookupComponent, TransactionComponent, TransferComponent],
  imports: [
    CommonModule,
    TransactionManagementRoutingModule
  ]
})
export class TransactionManagementModule { }
