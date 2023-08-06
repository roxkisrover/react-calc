import { Decimal } from 'decimal.js';

import { OPERATORS } from 'constants/operators';

export const operations = {
  [OPERATORS[0].id]: (prevValue: string, nextValue: string) => {
    const a = new Decimal(prevValue);
    const b = new Decimal(nextValue);

    return a.dividedBy(b).toString();
  },
  [OPERATORS[1].id]: (prevValue: string, nextValue: string) => {
    const a = new Decimal(prevValue);
    const b = new Decimal(nextValue);

    return a.times(b).toString();
  },
  [OPERATORS[2].id]: (prevValue: string, nextValue: string) => {
    const a = new Decimal(prevValue);
    const b = new Decimal(nextValue);

    return a.minus(b).toString();
  },
  [OPERATORS[3].id]: (prevValue: string, nextValue: string) => {
    const a = new Decimal(prevValue);
    const b = new Decimal(nextValue);

    return a.plus(b).toString();
  },
  [OPERATORS[4].id]: (nextValue: string) => {
    return nextValue;
  },
} as const;
