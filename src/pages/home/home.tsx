import * as React from 'react';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight, 
} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

export interface Props {
    
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
            </HomeWrapper>
         );
    }
}
 
export default Home;