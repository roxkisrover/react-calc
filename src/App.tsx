import Display from 'components/Display';
import Keypad from 'components/Keypad';
import { useCalculation } from 'hooks/useCalculation';
import Calculator from 'layouts/Calculator';

const App = () => {
  const {
    displayValue,
    clearAll,
    toggleSign,
    inputPercent,
    inputDigit,
    inputDot,
    performOperation,
  } = useCalculation();

  return (
    <Calculator>
      <Display displayValue={displayValue} />
      <Keypad
        clearAll={clearAll}
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
