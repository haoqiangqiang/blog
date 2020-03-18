import * as actionTypes from './actionTypes'
import { fromJS, Map } from 'immutable';

export interface HeaderState {
    focused: boolean;
    list: Array<string>;
    mouseIn: boolean;
    page: number;
    totalPage: number;
}

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
} as HeaderState) as Map<string, any>;

export default (state = defaultState, action: any) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);    
        case actionTypes.CHANGE_PAGE: 
            return state.set('page', action.page);   
        default:
            return state;
    }
}