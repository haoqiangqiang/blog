import * as React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { Article } from '../store/reducer';
import { actionCreators } from '../store';

export interface Props {
    list: any,
    getMoreList: any,
    page: number,
}
 
export interface State {
    
}
 
class List extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)
    }
    render() { 
        const { list, getMoreList, page } = this.props;
        const jsList = list.toJS();
        return ( 
            <div>
                {
                    jsList.map((item: Article) => {
                        return (
                            <ListItem key={item.id}>
                                <img  className='pic' src={item.imgUrl} alt=''/>
                                <ListInfo>
                                        <h3 className='title'>{item.title}</h3>
                                        <p className='desc'>{item.desc}</p>
                                    </ListInfo> 
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>浏览更多</LoadMore>
            </div>
         );
    }
}
 
const mapState = (state: any) => ({
    list: state.home.get('articleList'),
    page: state.home.get('articlePage'),
})

const mapDispatch = (dispatch: any) => ({
    getMoreList(page: number) {
        dispatch(actionCreators.getMoreList(page));
    }
})
export default connect(mapState, mapDispatch)(List);