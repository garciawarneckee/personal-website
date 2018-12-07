import React, { Component } from 'react';
import Welcome from './components/Welcome/Welcome'
import MainPage from './components/Main/MainPage'
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() { 
    return ( 
      <div>
        <Route exact path='/' component={ Welcome } />
        <Route exact path='/main' component={ MainPage } />
      </div>
    )
  }
}

