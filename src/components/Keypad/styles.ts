import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 320px;
  touch-action: manipulation;
`;

export const InputKeys = styled.div`
  width: 240px;
`;

export const FuncKeys = styled.div`
  display: flex;
`;

export const DigitKeys = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;

export const OperatorKeys = styled.div`
  display: flex;
  flex-direction: column;
`;
