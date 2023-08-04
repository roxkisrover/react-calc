import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import * as SC from './styles';

interface IDisplayProps {
  displayValue: string;
}

const Display = ({ displayValue }: IDisplayProps) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const valueWithSpaceSeparators = useMemo(
    () => displayValue.replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 '),
    [displayValue]
  );

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
        {valueWithSpaceSeparators}
      </SC.Text>
    </SC.Container>
  );
};

export default Display;
