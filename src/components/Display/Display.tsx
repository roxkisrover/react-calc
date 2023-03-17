import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import * as SC from './styles';

interface IDisplayProps {
  displayValue: string;
}

const Display = ({ displayValue }: IDisplayProps) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const adjustScale = useCallback(
    (actualScale: number) => {
      if (actualScale < 1) {
        setScale(actualScale);
        return;
      }

      if (scale < 1) {
        setScale(1);
      }
    },
    [scale]
  );

  useLayoutEffect(() => {
    if (containerRef.current && textRef.current) {
      const actualScale = containerRef.current.offsetWidth / textRef.current.offsetWidth;

      if (scale !== actualScale) {
        adjustScale(actualScale);
      }
    }
  });

  return (
    <SC.Container ref={containerRef}>
      <SC.Text ref={textRef} style={{ transform: `scale(${scale}, ${scale})` }}>
        {displayValue}
      </SC.Text>
    </SC.Container>
  );
};

export default Display;
