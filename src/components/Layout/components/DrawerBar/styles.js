import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 100%;
  align-items: center;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors['light-background-color']};
  border-right: 1px solid ${({ theme }) => theme.colors['light-other-divider']};
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
`;
