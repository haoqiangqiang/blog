// import * as actionTypes from './actionTypes'
import { fromJS, Map } from 'immutable';
import * as constants from './constants'

export interface Topic {
    id: number,
    title: string,
    imgUrl: string,
}
export interface Article {
    id: number,
    title: string,
    desc: string,
    imgUrl: string,
}
export interface Commend {
    id: number,
    imgUrl: string,
}
export interface HomeState {
   topicList: Topic[],
   articleList: Article[],
   recommendList: Commend[],
}

const defaultState = fromJS({
   topicList: [],
   articleList:[],
   recommendList:[],
} as HomeState) as Map<string, any>;

export default (state = defaultState, action: any) => {
        switch(action.type) {
            case constants.CHANGE_HOME_DATA:
              return  state.merge({
                    topicList: fromJS(action.topicList),
                    articleList: fromJS(action.articleList),
                    recommendList: fromJS(action.recommendList),
                })
            default:
                return state;
        }
}