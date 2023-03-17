import { ReactNode } from 'react';

import * as SC from './styles';

interface ICalculatorProps {
  children: ReactNode;
}

const Calculator = ({ children }: ICalculatorProps) => {
  return (
    <SC.Container>
      <SC.Calculator>{children}</SC.Calculator>
    </SC.Container>
  );
};

export default Calculator;
