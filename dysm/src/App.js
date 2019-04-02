import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route exact path="/" component={Home}/>
          <Route path="/" component={About}/>
          <Route path="/" component={Art}/>
          <Route path="/" component={DreamBoard}/> */}
        </Switch>
      </Layout>
    );
  }
}

export default App;
