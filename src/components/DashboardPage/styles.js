import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
`;

export const SearchArea = styled.div`
  min-width: 100%;

  background-color: ${({ theme }) => theme.colors['light-primary-shades-8-p']};
  padding: 52px 144px 0 80px;
`;

export const Dashboards = styled.div`
  min-width: 100%;
  padding: 48px 144px 31px 80px;
`;
