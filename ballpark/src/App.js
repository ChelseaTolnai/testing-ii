import React, { Component } from 'react';
import './App.css';

import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }

  render() {
    return (
      <>
        <Display 
          balls={this.state.balls}
          strikes={this.state.strikes}  
        />
        <Dashboard 
          handleSwingOutcome={this.handleSwingOutcome}
        />
      </>
    );
  }

  handleSwingOutcome(event) {
    const outcome = event.target
    switch(outcome) {
      case('strike'):
        break;
      case('ball'):
        break;    
      case('foul'):
        break;
      case('hit'):
        break;  
      default:
        throw new Error('Invalid outcome.')
    }
  }
}

export default App;
