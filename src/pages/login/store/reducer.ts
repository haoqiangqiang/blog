// import * as actionTypes from './actionTypes'
import { fromJS, Map } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    login: false,
}) as Map<string, any>;

export default (state = defaultState, action: any) => {
        switch(action.type) {
            case constants.CHANGE_LOGIN:
                return state.set('login', action.value); 
            case constants.LOGOUT:
                return state.set('login', action.value);   
            default:
                return state;
        }
}