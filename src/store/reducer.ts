import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store';

export interface State {
    header: Map<string, boolean>
}
const reducer =  combineReducers({
    header: headerReducer
})

export default reducer;