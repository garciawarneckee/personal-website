import React, { Component } from 'react';
import Typed from 'react-typed';

import './Welcome.css';

export default class Welcome extends Component {
    render() {
        return (
          <div className="Welcome">
            <header className="Welcome-header">
              <Typed 
                strings={[
                  'let greetings = Esteban.welcomeMessage()', 
                  '{ this.greetings }', 
                  'Hey there!']} 
                   typeSpeed={100}
                   style= { { 'font-size': 36 } } 
                   className="Welcome-intro Welcome-title Centered-content"
                   fadeOut={true}
                   onComplete={ (self) => { this.sleep(2000).then( () => { self.destroy() } ) }  }
              />
            </header>
          </div>
        );
      }
    
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}