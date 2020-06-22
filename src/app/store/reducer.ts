import {ADD_TRANSACTION, ADDALL_TRANSACTIONS} from './actions';
import { IAppState } from './store';

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TRANSACTION:
            return Object.assign({}, state, {
                transactions: state.transactions.concat(Object.assign({}, action.transaction)),
                lastUpdate: new Date()
            });
        case ADDALL_TRANSACTIONS:
            return Object.assign({}, state, {
                transactions: action.transactions,
                lastUpdate: new Date(0)
            });
    }
    return state;
}