import * as React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';
import { Article } from '../store/reducer';

export interface Props {
    list: any,
}
 
export interface State {
    
}
 
class List extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)
    }
    render() { 
        const { list } = this.props;
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
            </div>
         );
    }
}
 
const mapState = (state: any) => ({
    list: state.home.get('articleList')
})
export default connect(mapState)(List);