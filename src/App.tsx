import Display from 'components/Display';
import Keypad from 'components/Keypad';
import { useCalculation } from 'hooks/useCalculation';
import Calculator from 'layouts/Calculator';

const App = () => {
  const {
    displayedValue,
    clearAll,
    toggleSign,
    inputPercent,
    inputDigit,
    inputDot,
    performOperation,
  } = useCalculation();

  return (
    <Calculator>
      <Display displayedValue={displayedValue} />
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
