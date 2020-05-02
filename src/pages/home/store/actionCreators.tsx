import axios from 'axios';
import * as constants from './constants'

const changeHomeData = (result: any) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
})

const addHomeList = (list: any, nextPage: number) => ({
    type: constants.ADD_ARTICLE_LIST,
    list,
    nextPage,
})

export const getHomeInfo = () => {
    return (dispatch: any) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }); 
    }
}

export const getMoreList = (page: number) => {
    return (dispatch: any) => {
        axios.get(`/api/homeList.json?page=${page}`).then(res => {
            const result = res.data.data
            dispatch(addHomeList(result, page+1));
        }); 
    }
}

export const toggleTopShow = (show: boolean) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})