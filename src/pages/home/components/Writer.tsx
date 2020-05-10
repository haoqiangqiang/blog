import * as React from 'react';
import { WriterWrapper } from '../style';

export interface Props {
    
}
 
export interface State {
    
}
 
class Writer extends React.PureComponent<Props, State> {
    render() { 
        return ( 
            <WriterWrapper>writer</WriterWrapper>
         );
    }
}
 
export default Writer;