import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data: string[]) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page: number) => ({
    type: actionTypes.CHANGE_PAGE,
    page,
})

export const getList = () => {
    return (dispatch: any) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data.data as string[];
            dispatch(changeList(data));
        }).catch(() => {
            console.log('error');
        })
    }
}