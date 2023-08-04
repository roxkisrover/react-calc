import { cx } from '@linaria/core';

import { BUTTON_VARIANTS } from './constants';
import * as classes from './styles';

const VARIANT_CLASS_NAMES = {
  [BUTTON_VARIANTS.FUNC]: classes.func,
  [BUTTON_VARIANTS.DIGIT]: classes.digit,
  [BUTTON_VARIANTS.OPERATOR]: classes.operator,
  [BUTTON_VARIANTS.ZERO]: classes.zero,
  [BUTTON_VARIANTS.DOT]: classes.dot,
};

interface IButtonProps {
  text: string;
  onClick: () => void;
  variant: BUTTON_VARIANTS;
}

const Button = ({ text, onClick, variant }: IButtonProps) => {
  return (
    <button
      className={cx(classes.button, VARIANT_CLASS_NAMES[variant])}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
