import React from 'react';
import Header from './common/header/header';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Login from './pages/login/login';
import { Globalstyle } from './style';
import { IconGlobalStyle } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
        <Globalstyle />
        <IconGlobalStyle />
        <Router>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
        </Router>
    </Provider>
  );
}

export default App;
