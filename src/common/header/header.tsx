import React,{ Component } from 'react';
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

export interface Props {
    
}
 
export interface State {
    focused: boolean;
    
}
 
class Header extends Component {
   public state: State = {
        focused: false
    }
    render() { 
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
                            in={this.state.focused}
                            timeout={400}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            >

                            </NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</i>
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
         );
    };

    public handleInputFocus = () => {
        this.setState({
            focused: true,
        })
    };
    public handleInputBlur = () => {
        this.setState({
            focused: false,
        })
    }
}
 
export default Header;