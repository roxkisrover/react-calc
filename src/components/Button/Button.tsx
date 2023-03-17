import { BUTTON_VARIANTS } from './constants';
import * as SC from './styles';

interface IButtonProps {
  text: string;
  onClick: () => void;
  variant: BUTTON_VARIANTS;
}

const Button = ({ text, onClick, variant }: IButtonProps) => {
  return (
    <SC.Button type="button" variant={variant} onClick={onClick}>
      {text}
    </SC.Button>
  );
};

export default Button;
