import React, { Component } from 'react';
import Typed from 'react-typed';

import './Welcome.css';

export default class Welcome extends Component {
    render() {
      /* VSCode colors. @TODO: add as Sass variables in a separate file  */
      const keyWord = '#497EC7'
      const variableName = '#9CD9EC'
      const importName = '#4EC69D'
      const functions = '#DCDCAA'

      let _let = 'let '.fontcolor(keyWord)
      let greetings = 'greetings '.fontcolor(variableName)
      let Esteban = 'Esteban'.fontcolor(importName)
      let welcomeMessage = 'welcomeMessage()'.fontcolor(functions)

      let openBracket = '{ '.fontcolor(keyWord)
      let _this = 'this'.fontcolor(keyWord)
      let closeBracket = ' }'.fontcolor(keyWord)

        return (
          <div className="Welcome">
            <header className="Welcome-header">
              <Typed 
                strings={[
                  _let + greetings + '= ' + Esteban + '.' + welcomeMessage, 
                  openBracket + _this + '.' + greetings + closeBracket, 
                  'Hey there, glad you to be here!']} 
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
    
      sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

}