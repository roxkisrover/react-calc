import { useCallback, useState } from 'react';

import { OPERATORS } from 'constants/operators';
import { operations } from 'helpers/operations';

export const useCalculation = () => {
  const [displayedValue, setDisplayedValue] = useState<string>('0');
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [isAwaitingOperand, setIsAwaitingOperand] = useState<boolean>(false);
  const [operator, setOperator] = useState<(typeof OPERATORS)[number]['id'] | null>(null);

  const clearAll = useCallback(() => {
    setDisplayedValue('0');
    setStoredValue(null);
    setOperator(null);
    setIsAwaitingOperand(false);
  }, []);

  const toggleSign = useCallback(() => {
    const value = Number.parseFloat(displayedValue);

    if (value !== 0) {
      setDisplayedValue((prev) =>
        prev.startsWith('-') ? prev.substring(1) : `-${displayedValue}`
      );
    }
  }, [displayedValue]);

  const inputPercent = useCallback(() => {
    setDisplayedValue((prev) => String(Number.parseFloat(prev) / 100));
  }, []);

  const inputDigit = useCallback(
    (digit: string) => {
      if (isAwaitingOperand) {
        setDisplayedValue(digit);
        setIsAwaitingOperand(false);
      } else {
        setDisplayedValue((prev) => (prev === '0' ? digit : `${prev}${digit}`));
      }
    },
    [isAwaitingOperand]
  );

  const inputDot = useCallback(() => {
    if (isAwaitingOperand) {
      setDisplayedValue('0.');
      setIsAwaitingOperand(false);
      return;
    }

    if (!displayedValue.includes('.')) {
      setDisplayedValue((prev) => `${prev}.`);
    }
  }, [isAwaitingOperand, displayedValue]);

  const performOperation = (nextOperator: keyof typeof operations) => {
    if (storedValue === null) {
      setStoredValue(displayedValue);
    } else if (operator) {
      const computedValue = operations[operator](storedValue, displayedValue);

      setStoredValue(computedValue);
      setDisplayedValue(String(computedValue));
    }

    setOperator(nextOperator);
    setIsAwaitingOperand(true);
  };

  return {
    displayedValue,
    clearAll,
    toggleSign,
    inputPercent,
    inputDigit,
    inputDot,
    performOperation,
  };
};
