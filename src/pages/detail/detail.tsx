import * as React from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content,
} from './style';
import { actionCreators } from './store';

export interface Props {
    title: string,
    content: string,
    getDetail: any,
}
 
export interface State {
    
}
 
class Detail extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)
    }
    render() { 
        return ( 
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} >
                </Content>
            </DetailWrapper>
         );
    }
    componentDidMount() {
        this.props.getDetail();
    }
}
 
const mapState = (state: any) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content'),
})
const mapDispatch = (dispatch: any) => ({
    getDetail() {
        dispatch(actionCreators.getDetail());
    }
})
export default connect(mapState, mapDispatch)(Detail);