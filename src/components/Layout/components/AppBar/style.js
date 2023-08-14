import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['light-background-color']};
  border-bottom: 1px solid ${({ theme }) => theme.colors['light-other-divider']};
`;

export const BreadCramps = styled.div`
  margin: 0 0 0 24px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 0 0 24px;
`;
