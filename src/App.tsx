import { useCallback, useMemo, useState } from 'react';

import Display from 'components/Display';
import Keypad from 'components/Keypad';
import { operators } from 'constants/operators';
import Calculator from 'layouts/Calculator';

const App = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [isWaitingForOperand, setIsWaitingForOperand] = useState<boolean>(false);
  const [operator, setOperator] = useState<(typeof operators)[number]['id'] | null>(null);

  const operations = useMemo(() => {
    const nextValue = Number.parseFloat(displayValue);

    return {
      [operators[0].id]: (prevValue: number) => prevValue / nextValue,
      [operators[1].id]: (prevValue: number) => prevValue * nextValue,
      [operators[2].id]: (prevValue: number) => prevValue - nextValue,
      [operators[3].id]: (prevValue: number) => prevValue + nextValue,
      [operators[4].id]: () => nextValue,
    };
  }, [displayValue]);

  const clearDisplay = useCallback(() => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
    setIsWaitingForOperand(false);
  }, []);

  const toggleSign = () => {
    const value = Number.parseFloat(displayValue);

    if (value !== 0) {
      setDisplayValue((prev) => (prev.startsWith('-') ? prev.substring(1) : `-${displayValue}`));
    }
  };

  const inputPercent = useCallback(() => {
    setDisplayValue((prev) => String(Number.parseFloat(prev) / 100));
  }, []);

  const inputDigit = useCallback(
    (digit: string) => {
      if (isWaitingForOperand) {
        setDisplayValue(digit);
        setIsWaitingForOperand(false);
      } else {
        setDisplayValue((prev) => (prev === '0' ? digit : `${prev}${digit}`));
      }
    },
    [isWaitingForOperand]
  );

  const inputDot = () => {
    if (isWaitingForOperand) {
      setDisplayValue('0.');
      setIsWaitingForOperand(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue((prev) => `${prev}.`);
    }
  };

  const performOperation = (nextOperator: keyof typeof operations) => {
    const nextValue = Number.parseFloat(displayValue);

    if (storedValue === null) {
      setStoredValue(nextValue);
    } else if (operator) {
      const computedValue = operations[operator](storedValue);

      setStoredValue(computedValue);
      setDisplayValue(String(computedValue));
    }

    setOperator(nextOperator);
    setIsWaitingForOperand(true);
  };

  return (
    <Calculator>
      <Display displayValue={displayValue} />
      <Keypad
        clearDisplay={clearDisplay}
        toggleSign={toggleSign}
        inputPercent={inputPercent}
        inputDigit={inputDigit}
        inputDot={inputDot}
        performOperation={performOperation}
      />
    </Calculator>
  );
};

export default App;
