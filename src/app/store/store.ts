import {ITransaction} from './transaction';

export interface IAppState {
    transactions: ITransaction[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    transactions: [],
    lastUpdate: null
}
