import * as actionTypes from './actionTypes'
import { fromJS, Map } from 'immutable';

export interface HeaderState {
    focused: boolean;
}

const defaultState = fromJS({
    focused: false,
} as HeaderState) as Map<string, boolean>;

export default (state = defaultState, action: any) => {
    if(action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if(action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}