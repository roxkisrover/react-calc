import React, { Component } from 'react';
import Display from './Display';
import './App.scss';

const initialState = {
	displayValue: '0',
	isWaitingForOperand: false,
	operator: null,
	storedValue: null
};

class App extends Component {
	state = {
		...initialState
	};

	clearDisplay = () => {
		this.setState({
			...initialState
		});
	}

	toggleSign = () => {
		const { displayValue } = this.state;

		if (parseFloat(displayValue) !== 0) {
			this.setState({
				displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
			});
		}
	}

	inputPercent = () => {
		const { displayValue } = this.state;
		const value = parseFloat(displayValue);

		this.setState({
			displayValue: String(value / 100)
		});
	}

	inputDigit = (digit) => {
		const { displayValue, isWaitingForOperand } = this.state;

		if (isWaitingForOperand) {
			this.setState({
				displayValue: digit,
				isWaitingForOperand: false
			});
		}
		else {
			this.setState({
				displayValue: displayValue === '0' ? digit : `${displayValue}${digit}`
			});
		}
	}

	inputDot = () => {
		const { displayValue, isWaitingForOperand } = this.state;

		if (isWaitingForOperand) {
			this.setState({
				displayValue: '0.',
				isWaitingForOperand: false
			});
		}
		else if (displayValue.indexOf('.') === -1) {
			this.setState({
				displayValue: displayValue + '.',
				isWaitingForOperand: false
			});
		}
	}

	performOperation = (nextOperator) => {
		const { displayValue, operator, storedValue } = this.state;
		const nextValue = parseFloat(displayValue);
		const operations = {
			'/': (prevValue, nextValue) => prevValue / nextValue,
			'*': (prevValue, nextValue) => prevValue * nextValue,
			'-': (prevValue, nextValue) => prevValue - nextValue,
			'+': (prevValue, nextValue) => prevValue + nextValue,
			'=': (_prevValue, nextValue) => nextValue
		};

		if (storedValue === null) {
			this.setState({
				storedValue: nextValue
			});
		}
		else if (operator) {
			const prevValue = storedValue || 0;
			const computedValue = operations[operator](prevValue, nextValue);

			this.setState({
				storedValue: computedValue,
				displayValue: String(computedValue)
			});
		}

		this.setState({
			isWaitingForOperand: true,
			operator: nextOperator
		});
	}

	render() {
		return (
			<div className="container">
				<div className="calculator">
					<Display>{this.state.displayValue}</Display>
					<div className="keypad">
						<div className="input-keys">
							<div className="function-keys">
								<button
									className="key key--function"
									onClick={this.clearDisplay}
								>
									AC
								</button>
								<button
									className="key key--function"
									onClick={this.toggleSign}
								>
									+/-
								</button>
								<button
									className="key key--function"
									onClick={this.inputPercent}
								>
									%
								</button>
							</div>
							<div className="digit-keys">
								<button
                  className="key key--digit key--zero"
									onClick={() => this.inputDigit('0')}
								>
									0
								</button>
								<button
									className="key key--digit key--dot"
									onClick={this.inputDot}
								>
									.
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('1')}
								>
									1
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('2')}
								>
									2
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('3')}
								>
									3
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('4')}
								>
									4
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('5')}
								>
									5
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('6')}
								>
									6
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('7')}
								>
									7
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('8')}
								>
									8
								</button>
								<button
									className="key key--digit"
									onClick={() => this.inputDigit('9')}
								>
									9
								</button>
							</div>
						</div>
						<div className="operator-keys">
							<button
								className="key key--operator"
								onClick={() => this.performOperation('/')}
							>
								÷
							</button>
							<button
								className="key key--operator"
								onClick={() => this.performOperation('*')}
							>
								×
							</button>
							<button
								className="key key--operator"
								onClick={() => this.performOperation('-')}
							>
								−
							</button>
							<button
								className="key key--operator"
								onClick={() => this.performOperation('+')}
							>
								+
							</button>
							<button
								className="key key--operator key--equals"
								onClick={() => this.performOperation('=')}
							>
								=
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
