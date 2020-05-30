import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer}  from '../pages/home/store';
import { reducer as detailReducer}  from '../pages/detail/store';

export interface State {
    header: Map<string, any>
}
const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
})

export default reducer;