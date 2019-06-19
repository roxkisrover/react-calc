import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import operators from '../../const/operators';
import './style.scss';

function Keypad({
  clearDisplay,
  toggleSign,
  inputPercent,
  inputDigit,
  inputDot,
  performOperation,
}) {
  const renderDigitButtons = () => {
    const buttons = [];

    for (let i = 1; i < 10; i += 1) {
      buttons.push(
        <Button
          key={`digit-${i}`}
          modifiers={['digit']}
          handleClick={() => inputDigit(String(i))}
          text={String(i)}
        />,
      );
    }

    return <Fragment>{buttons}</Fragment>;
  };

  const renderOperatorButtons = () => {
    const buttons = operators.map(operator => (
      <Button
        key={`operator-${operator.id}`}
        modifiers={['operator']}
        handleClick={() => performOperation(operator.id)}
        text={operator.sign}
      />
    ));

    return <Fragment>{buttons}</Fragment>;
  };

  return (
    <div className="keypad">
      <div className="input-keys">
        <div className="function-keys">
          <Button
            modifiers={['function']}
            handleClick={clearDisplay}
            text="AC"
          />
          <Button
            modifiers={['function']}
            handleClick={toggleSign}
            text="+/-"
          />
          <Button
            modifiers={['function']}
            handleClick={inputPercent}
            text="%"
          />
        </div>
        <div className="digit-keys">
          <Button
            modifiers={['digit', 'zero']}
            handleClick={() => inputDigit('0')}
            text="0"
          />
          <Button
            modifiers={['digit', 'dot']}
            handleClick={inputDot}
            text="."
          />
          {renderDigitButtons()}
        </div>
      </div>
      <div className="operator-keys">{renderOperatorButtons()}</div>
    </div>
  );
}

Keypad.propTypes = {
  clearDisplay: PropTypes.func.isRequired,
  toggleSign: PropTypes.func.isRequired,
  inputPercent: PropTypes.func.isRequired,
  inputDigit: PropTypes.func.isRequired,
  inputDot: PropTypes.func.isRequired,
  performOperation: PropTypes.func.isRequired,
};

export default Keypad;
