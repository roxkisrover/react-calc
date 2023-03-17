import { useMemo } from 'react';

import Button, { BUTTON_VARIANTS } from 'components/Button';
import { operators } from 'constants/operators';

import * as SC from './styles';

interface IKeypadProps {
  clearDisplay: () => void;
  toggleSign: () => void;
  inputPercent: () => void;
  inputDigit: (digit: string) => void;
  inputDot: () => void;
  performOperation: (nextOperator: (typeof operators)[number]['id']) => void;
}

const Keypad = ({
  clearDisplay,
  toggleSign,
  inputPercent,
  inputDigit,
  inputDot,
  performOperation,
}: IKeypadProps) => {
  const digitButtons = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => (
        <Button
          key={`digit-${index + 1}`}
          text={String(index + 1)}
          onClick={() => inputDigit(String(index + 1))}
          variant={BUTTON_VARIANTS.DIGIT}
        />
      )),
    [inputDigit]
  );

  const operatorButtons = useMemo(
    () =>
      operators.map((operator) => (
        <Button
          key={`operator-${operator.id}`}
          text={operator.sign}
          onClick={() => performOperation(operator.id)}
          variant={BUTTON_VARIANTS.OPERATOR}
        />
      )),
    [performOperation]
  );

  return (
    <SC.Container>
      <SC.InputKeys>
        <SC.FuncKeys>
          <Button text="AC" onClick={clearDisplay} variant={BUTTON_VARIANTS.FUNC} />
          <Button text="+/-" onClick={toggleSign} variant={BUTTON_VARIANTS.FUNC} />
          <Button text="%" onClick={inputPercent} variant={BUTTON_VARIANTS.FUNC} />
        </SC.FuncKeys>
        <SC.DigitKeys>
          <Button text="0" onClick={() => inputDigit('0')} variant={BUTTON_VARIANTS.ZERO} />
          <Button text="." onClick={inputDot} variant={BUTTON_VARIANTS.DOT} />
          {digitButtons}
        </SC.DigitKeys>
      </SC.InputKeys>
      <SC.OperatorKeys>{operatorButtons}</SC.OperatorKeys>
    </SC.Container>
  );
};

export default Keypad;
