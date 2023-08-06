import Display from 'components/Display';
import Keypad from 'components/Keypad';
import { useCalculation } from 'hooks/useCalculation';
import Calculator from 'layouts/Calculator';

const App = () => {
  const {
    displayValue,
    toggleSign,
    inputPercent,
    inputDigit,
    inputDot,
    performOperation,
    clearAll,
  } = useCalculation();

  return (
    <Calculator>
      <Display displayValue={displayValue} />
      <Keypad
        toggleSign={toggleSign}
        inputPercent={inputPercent}
        inputDigit={inputDigit}
        inputDot={inputDot}
        performOperation={performOperation}
        clearAll={clearAll}
      />
    </Calculator>
  );
};

export default App;
