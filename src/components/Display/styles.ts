import styled from 'styled-components';

export const Container = styled.div`
  font-size: 5em;
  font-weight: 100;
  line-height: 120px;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #2c2f30;
  flex: 1;
`;

export const Text = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  padding: 0 20px;
  transform-origin: right;
  white-space: nowrap;
`;
