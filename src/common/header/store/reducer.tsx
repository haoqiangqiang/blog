import * as actionTypes from './actionTypes'
import { fromJS, Map } from 'immutable';

export interface HeaderState {
    focused: boolean;
    list: Array<string>;
}

const defaultState = fromJS({
    focused: false,
    list: [],
} as HeaderState) as Map<string, any>;

export default (state = defaultState, action: any) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
}