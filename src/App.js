import React, { Component } from 'react';
import Welcome from './components/Welcome/Welcome'
import Main from './components/Main/Main'
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() { 
    return ( 
      <div>
        <Route exact path='/' component={ Welcome } />
        <Route exact path='/main' component={ Main } />
      </div>
    )
  }
}

