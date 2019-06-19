import React, { Component } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.scss';

const initialState = {
  displayValue: '0',
  isWaitingForOperand: false,
  operator: null,
  storedValue: null,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };
  }

  clearDisplay = () => {
    this.setState({
      ...initialState,
    });
  };

  toggleSign = () => {
    const { displayValue } = this.state;

    if (parseFloat(displayValue) !== 0) {
      this.setState({
        displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : `-${displayValue}`,
      });
    }
  };

  inputPercent = () => {
    const { displayValue } = this.state;
    const value = parseFloat(displayValue);

    this.setState({
      displayValue: String(value / 100),
    });
  };

  inputDigit = (digit) => {
    const { displayValue, isWaitingForOperand } = this.state;

    if (isWaitingForOperand) {
      this.setState({
        displayValue: digit,
        isWaitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue: displayValue === '0' ? digit : `${displayValue}${digit}`,
      });
    }
  };

  inputDot = () => {
    const { displayValue, isWaitingForOperand } = this.state;

    if (isWaitingForOperand) {
      this.setState({
        displayValue: '0.',
        isWaitingForOperand: false,
      });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: `${displayValue}.`,
        isWaitingForOperand: false,
      });
    }
  };

  performOperation = (nextOperator) => {
    const { displayValue, operator, storedValue } = this.state;
    const nextValue = parseFloat(displayValue);
    const operations = {
      '/': prevValue => prevValue / nextValue,
      '*': prevValue => prevValue * nextValue,
      '-': prevValue => prevValue - nextValue,
      '+': prevValue => prevValue + nextValue,
      '=': () => nextValue,
    };

    if (storedValue === null) {
      this.setState({
        storedValue: nextValue,
      });
    } else if (operator) {
      const prevValue = storedValue || 0;
      const computedValue = operations[operator](prevValue, nextValue);

      this.setState({
        storedValue: computedValue,
        displayValue: String(computedValue),
      });
    }

    this.setState({
      isWaitingForOperand: true,
      operator: nextOperator,
    });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="container">
        <div className="calculator">
          <Display>{displayValue}</Display>
          <Keypad
            clearDisplay={this.clearDisplay}
            toggleSign={this.toggleSign}
            inputPercent={this.inputPercent}
            inputDigit={this.inputDigit}
            inputDot={this.inputDot}
            performOperation={this.performOperation}
          />
        </div>
      </div>
    );
  }
}

export default App;
