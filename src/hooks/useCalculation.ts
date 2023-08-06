import { useCallback, useMemo, useState } from 'react';

import { operators } from 'constants/operators';

export const useCalculation = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [isAwaitingOperand, setIsAwaitingOperand] = useState<boolean>(false);
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

  const clearAll = useCallback(() => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
    setIsAwaitingOperand(false);
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
      if (isAwaitingOperand) {
        setDisplayValue(digit);
        setIsAwaitingOperand(false);
      } else {
        setDisplayValue((prev) => (prev === '0' ? digit : `${prev}${digit}`));
      }
    },
    [isAwaitingOperand]
  );

  const inputDot = () => {
    if (isAwaitingOperand) {
      setDisplayValue('0.');
      setIsAwaitingOperand(false);
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
    setIsAwaitingOperand(true);
  };

  return {
    displayValue,
    clearAll,
    toggleSign,
    inputPercent,
    inputDigit,
    inputDot,
    performOperation,
  };
};
