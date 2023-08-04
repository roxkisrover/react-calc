import { styled } from '@linaria/react';

export const Container = styled.div`
  flex: 1;

  font-size: 5em;
  font-weight: 100;
  line-height: 120px;
  color: var(--color-white);

  background-color: var(--color-dark-charcoal);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Text = styled.div`
  position: absolute;
  right: 0;
  transform-origin: right;

  display: inline-block;

  padding: 0 20px;

  white-space: nowrap;
`;
