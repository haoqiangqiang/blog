import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style';
import { actionCreators } from './store';

export interface Props {
    login: any;
    isLogin: boolean;
}
 
export interface State {
    
}
 
class Login extends React.PureComponent<Props, State> {
    private account: any;
    private password: any;
    public constructor(props: Props) {
        super(props)
    }
    render() { 
        const { isLogin } = this.props;
        if(!isLogin) {
            return ( 
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="user" ref={(input) => {this.account = input}}/>
                        <Input placeholder="password" type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
             );
        } else {
            return <Redirect to='/' />
        }
    }
  
}

const mapState = (state: any) => ({
    isLogin: state.login.get('login')
})
 
const mapDispatch = (dispatch: any) => ({
    login(accountElem: any, passwordElem: any) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})
export default connect(mapState, mapDispatch)(Login);