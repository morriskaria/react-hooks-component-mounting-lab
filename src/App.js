import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerIDs: []
    };
  }

  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random() * 1000)]
    }));
  }

  handleRemoveTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  }

  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.state.timerIDs.map(id => (
            <Timer 
              key={id} 
              id={id} 
              removeTimer={this.handleRemoveTimer} 
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;