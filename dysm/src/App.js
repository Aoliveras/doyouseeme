import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Art from './components/Art/Art';
import DreamBoard from './components/DreamBoard/DreamBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/art" component={Art}/>
          <Route path="/dreamBoard" component={DreamBoard}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
