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
import  { actionCreators }  from './store';

interface Props {
    focused: boolean,
    list: string[],
    handleInputFocus: any,
    handleInputBlur: any,
}

class Header extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }
    render() {
        const {focused, handleInputBlur, handleInputFocus} = this.props;
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
                        in={focused}
                        timeout={400}
                        classNames='slide'
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        >
    
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</i>
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
        const { focused, list } = this.props;
        if(focused){
            return (
                <SearchInfo >
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {
                                list.map((item) => {
                                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                })
                            }
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
        list: state.header.get('list') as string[],
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);