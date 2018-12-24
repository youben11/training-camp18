import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/uikit.css';
import Login2 from './components/login2'
import Header from './components/header'
import Social from './components/social/Social'
import Bg from './assets/icons/bg.jpg'
import Nav from './components/nav/Nav'
class App extends Component {
  render() {
    return (
      <div     style={{backgroundImage:`url(${Bg})`,height:"660px"}} className="App">
    <Login2/>
    </div>

    );
  }
}

export default App;
