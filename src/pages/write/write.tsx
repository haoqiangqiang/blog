import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export interface Props {
    isLogin: boolean;
}
 
export interface State {
    
}
 
class Write extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props)
    }
    render() { 
        const { isLogin } = this.props;
        if(isLogin) {
            return ( 
                <div>写文章</div>
             );
        } else {
            return <Redirect to='/login' />
        }
    }
  
}

const mapState = (state: any) => ({
    isLogin: state.login.get('login')
})
 
export default connect(mapState, null)(Write);