import React, { Component } from 'react';
import Typed from 'react-typed';

import './Welcome.css';
import Colors from '../../theme/Colors'

export default class Welcome extends Component {
    render() {
      const firstMessage = this.firstMessage()
      const secondMessage = this.secondMessage()

        return (
          <div className="Welcome">
            <header className="Welcome-header">
              <Typed 
                strings={[ firstMessage, secondMessage, 'Hey there, glad you to be here!']} 
                typeSpeed={100}
                style= { { 'fontSize': 36 } } 
                className="Welcome-intro Welcome-title Centered-content"
                fadeOut={true}
                onComplete={ (self) => { this.sleep(1000).then( () => { 
                  self.destroy() } )
                  this.sleep(1000).then( () => this.props.history.push('/main') )
                } }
              />
            </header>
          </div>
        );
      }
    
      sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

      firstMessage() {
        let _let = 'let '.fontcolor(Colors.vsCodeKeyword);
        let greetings = 'greetings '.fontcolor(Colors.vsCodeVariableName);
        let Esteban = 'Esteban'.fontcolor(Colors.vsCodeImportName);
        let welcomeMessage = 'welcomeMessage()'.fontcolor(Colors.vsCodeFunctions);
        return _let + greetings + '= ' + Esteban + '.' + welcomeMessage;
      }

      secondMessage() {
        let openBracket = '{ '.fontcolor(Colors.vsCodeKeyword);
        let _this = 'this'.fontcolor(Colors.vsCodeKeyword);
        let greetings = 'greetings '.fontcolor(Colors.vsCodeVariableName);
        let closeBracket = ' }'.fontcolor(Colors.vsCodeKeyword);
        return openBracket + _this + '.' + greetings + closeBracket;
      }

}