import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    const { id, removeTimer } = this.props;

    return (
      <div className="Timer">
        <h2>Timer #{id}</h2>
        <h3>{time}</h3>
        <button onClick={() => removeTimer(id)}>X</button>
      </div>
    );
  }
}

export default Timer;