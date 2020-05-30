import axios from 'axios'
import * as constants from './constants';

const changeDetail = (title: string, content: string) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content,
})


export const getDetail = (id: number) => {
    return (dispatch: any) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
           const result = res.data.data;
            dispatch(changeDetail(result.title, result.content))
        })
    }
}