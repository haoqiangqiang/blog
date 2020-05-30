import React, { Component } from 'react';
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
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style';
import { State } from '../../store/reducer';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators} from '../../pages/login/store';
import { Link } from 'react-router-dom';

interface Props {
    focused: boolean,
    list: any,
    page: number,
    totalPage: number,
    mouseIn: boolean,
    login: boolean,
    handleInputFocus: any,
    handleInputBlur: any,
    handleMouseEnter: any,
    handleMouseLeave:any,
    handleChangePage: any,
    logout: any,
}

class Header extends Component<Props> {
    public spinIcon: any;
    public constructor(props: Props) {
        super(props);
    }
    render() {
        const {focused, list, handleInputBlur, handleInputFocus, login, logout} = this.props;
        return (
            <HeaderWrapper>
            <Link to='/'>
                <Logo />
            </Link>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    login ? 
                        <NavItem onClick={logout} className='right'>退出</NavItem> : 
                        <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                }
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={400}
                        classNames='slide'
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        >
    
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60a;</i>
                    {this.getListArea()}
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

    private getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}    
                >
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                                <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                                换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfo>
            )} else {
                return null;
            }
    }
}



const mapStateToProps = (state: State) => {
    return {
        focused: state.header.get('focused') as boolean,
        list: state.header.get('list'),
        page: state.header.get('page') as number,
        totalPage: state.header.get('totalPage'),
        mouseIn: state.header.get('mouseIn'),
        login: state.login.get('login'),
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleInputFocus(list: any) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        logout() {
            dispatch(loginActionCreators.logout());
        },
        handleChangePage(page: number, totalPage: number, icon: any) {
            let originAngle = icon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0;
            }
            icon.style.transform = `rotate(${originAngle + 360}deg)`;
            page < totalPage ? 
                dispatch(actionCreators.changePage(page + 1)) : 
                dispatch(actionCreators.changePage(1))
        },
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);