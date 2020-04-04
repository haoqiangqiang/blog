import * as React from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

export interface Props {
    list?: any;
}
 
export interface State {
    
}
 
class Recommend extends React.Component<Props, State> {
    public constructor (props: Props) {
        super(props);
    }
    render() {
        const { list } = this.props;
        const jsList = list.toJS(); 
        return ( 
            <RecommendWrapper>
                {
                    jsList.map((item: any) => {
                        return <RecommendItem key={item.id} imgUrl={item.imgUrl}/>
                    })
                }
            </RecommendWrapper>
         );
    }
}
 const mapState = (state: any) => ({
     list: state.home.get('recommendList'),
 })
export default connect(mapState, null)(Recommend);