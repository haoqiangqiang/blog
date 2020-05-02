import * as React from 'react';
import { connect } from 'react-redux';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight, 
    BackTop,
} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

export interface Props {
    changeHomeData: any,
    changeScrollTopShow: any,
    showScroll: boolean,
}
 
export interface State {
    
}
 
class Home extends React.Component<Props, State> {
    render() { 
        return ( 
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? 
                    <BackTop title='回到顶部' onClick={() => this.handleScrollTop()}>^</BackTop> : null}                
            </HomeWrapper>
         );
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    handleScrollTop() {
        console.log('to top');
        window.scrollTo(0, 0);
    }
}
 const mapState = (state: any) => ({
     showScroll: state.home.get('showScroll'),
 })
 const mapDispatch = (dispatch: any) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
 })
export default connect(mapState, mapDispatch)(Home);
