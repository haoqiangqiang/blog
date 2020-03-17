import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper,
} from './style';
import { State } from '../../store/reducer';
import  { actionCreators }  from './store';

interface Props {
    focused: boolean,
    handleInputFocus: any,
    handleInputBlur: any,
}

const Header = (props: Props) => {
    return (
        <HeaderWrapper>
        <Logo />
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
                <i className='iconfont'>&#xe636;</i>
            </NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={400}
                    classNames='slide'
                >
                    <NavSearch
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                    >

                    </NavSearch>
                </CSSTransition>
                <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</i>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='reg'>注册</Button>
            <Button className='writting'>
                <i className='iconfont'>&#xe6e5;</i>
                写文章
            </Button>
        </Addition>
    </HeaderWrapper> 
)}
const mapStateToProps = (state: State) => {
    return {
        focused: state.header.get('focused') as boolean,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);