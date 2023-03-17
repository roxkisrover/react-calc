import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Calculator = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 440px;
  border: 1px solid #2c2f30;
  border-radius: 10px;
  box-shadow: 0 22px 70px 4px rgba(0, 0, 0, 0.56);
`;
