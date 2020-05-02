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
   articlePage: number,
   showScroll: boolean,
}

const defaultState = fromJS({
   topicList: [],
   articleList:[],
   recommendList:[],
   articlePage: 0,
   showScroll: false,
} as HomeState) as Map<string, any>;

const changeHomeData = (state: any, action: any) => {
    return  state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    })
}

const addArticleList = (state: any, action: any) => {
    return  state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage,
    })
}
export default (state = defaultState, action: any) => {
        switch(action.type) {
            case constants.CHANGE_HOME_DATA:
              return changeHomeData(state, action);
            case constants.ADD_ARTICLE_LIST:
               return addArticleList(state, action);
            case constants.TOGGLE_SCROLL_TOP:
                return state.set('showScroll', action.show)
            default:
                return state;
        }
}