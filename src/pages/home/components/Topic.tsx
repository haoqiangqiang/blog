import * as React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

export interface Props {
    list?: any,
}
 
export interface State {
    
}
 
class Topic extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props)
    }
    render() { 
        const { list } = this.props;
        const jsList = list.toJS();
        return ( 
                <TopicWrapper>
                    {
                        jsList.map((item: any) => (

                                <TopicItem  key={item.id}>
                                    <img
                                        width=''
                                        className='topic-pic' 
                                        alt=''
                                        src={item.imgUrl} />
                                    {item.title}
                                </TopicItem>
                        ))
                    }
                </TopicWrapper>
         );
    }
}
 
const mapState = (state: any) => ({
    list: state.home.get('topicList')
})
export default connect(mapState, null)(Topic);