import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Calculator = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 320px;
  height: 440px;

  border: 1px solid ${({ theme }) => theme.colors.darkCharcoal};
  border-radius: 10px;
  box-shadow: 0 22px 70px 4px rgb(0 0 0 / 56%);
`;
