import styled from 'styled-components';

export const Container = styled.div`
  touch-action: manipulation;
  display: flex;
  height: 320px;
`;

export const InputKeys = styled.div`
  width: 240px;
`;

export const FuncKeys = styled.div`
  display: flex;
`;

export const DigitKeys = styled.div`
  display: flex;
  flex-flow: row wrap-reverse;
`;

export const OperatorKeys = styled.div`
  display: flex;
  flex-direction: column;
`;
