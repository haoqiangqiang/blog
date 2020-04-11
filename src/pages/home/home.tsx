import * as React from 'react';
import { connect } from 'react-redux';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight, 
} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

export interface Props {
    changeHomeData: any,
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
    componentDidMount() {
        this.props.changeHomeData();
    }
}
 const mapDispatch = (dispatch: any) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    }
 })
export default connect(null, mapDispatch)(Home);

// "<scene name="scene_55487bcb-7496-404a-972a-aca009766198" title="u=679906364,2223690437&amp;fm=26&amp;gp=0.jpg" onstart="" havevrimage="true" thumburl="https://sheencity-bj.oss-cn-hangzhou.aliyuncs.com/venus/dev/resources/95dbd38a/d943740d-65ed-4086-a6c6-642adee9b91a/panos/55487bcb-7496-404a-972a-aca009766198/thumb.jpg" lat="" lng="" heading="" visible="true" action="snowballs()" actionname="下雪" weatherflakes="3500" weatherspeed="5" weatherdegreename="大雪" xmlns="http://www.w3.org/1999/xhtml" bgmusic="C:\Users\86155\AppData\Roaming\Venus/krpano-project/krpano-project/d943740d-65ed-4086-a6c6-642adee9b91a/musicTemp/downlifiting.mp3" musicname="downlifiting.mp3"><view hlookat="0" vlookat="0" fovtype="MFOV" fov="120" fovmin="70" fovmax="140"></view><preview url="https://sheencity-bj.oss-cn-hangzhou.aliyuncs.com/venus/dev/resources/95dbd38a/d943740d-65ed-4086-a6c6-642adee9b91a/panos/55487bcb-7496-404a-972a-aca009766198/preview.jpg"></preview><image type="CUBE" multires="true" tilesize="512" if="!webvr.isenabled"><level tiledimagewidth="1024" tiledimageheight="1024"><cube url="https://sheencity-bj.oss-cn-hangzhou.aliyuncs.com/venus/dev/resources/95dbd38a/d943740d-65ed-4086-a6c6-642adee9b91a/panos/55487bcb-7496-404a-972a-aca009766198/mres_%s/l1/%v/l1_%s_%v_%h.jpg"></cube></level><level tiledimagewidth="2560" tiledimageheight="2560"><cube url="https://sheencity-bj.oss-cn-hangzhou.aliyuncs.com/venus/dev/resources/95dbd38a/d943740d-65ed-4086-a6c6-642adee9b91a/panos/55487bcb-7496-404a-972a-aca009766198/mres_%s/l2/%v/l2_%s_%v_%h.jpg"></cube></level></image><image if="webvr.isenabled"><cube url="https://sheencity-bj.oss-cn-hangzhou.aliyuncs.com/venus/dev/resources/95dbd38a/d943740d-65ed-4086-a6c6-642adee9b91a/panos/55487bcb-7496-404a-972a-aca009766198/mobile_%s.jpg"></cube></image></scene>"