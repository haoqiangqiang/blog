import { fromJS, Map } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    title: '',
    content: '',
 }) as Map<string, any>;
export default (state = defaultState, action: any) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default: 
            return state;
    }
}