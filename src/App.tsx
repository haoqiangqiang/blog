import React, { Fragment } from 'react';
import Header from './common/header/header';
import { Globalstyle } from './style';
import { IconGlobalStyle } from './statics/iconfont/iconfont';

function App() {
  return (
    <Fragment>
        <Globalstyle />
        <IconGlobalStyle />
        <Header />
    </Fragment>
  );
}

export default App;
