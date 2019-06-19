import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button({ modifiers, handleClick, text }) {
  const getModifiers = () => modifiers.reduce((acc, value) => `${acc} ${value ? `key--${value}` : ''}`, '').trim();
  const getClassName = () => `key ${getModifiers()}`.trim();

  return (
    <button
      type="button"
      className={getClassName()}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  modifiers: [''],
};

export default Button;
