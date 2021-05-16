import '../App.css';
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return Calculate;
  }

  render() {
    return (
      <div className="col-2 mx-auto">
        <Display />
        <ButtonPanel onClick={handleClick} />
      </div>
    );
  }
}

export default App;
