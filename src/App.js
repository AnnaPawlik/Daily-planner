import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from './views/LoginView';
import GlobalStyle from '../src/theme/GlobalStyle';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <GlobalStyle/>
            <Switch>
              <Route exact path="/register" component={RegisterView} />
              <Route exact path="/" component={LoginView} />
              <Route exact path="/home" component={HomeView} />
            </Switch>
        </BrowserRouter>      
    );
  }
};

export default App;
