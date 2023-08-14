import React from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import { DashboardWrapper, Dashboards, SearchArea } from './styles';
import Dashboard from './components/Dashboard/Dashboard';

function DashboardPage() {
  return (
    <DashboardWrapper>
      <SearchArea>
        <SearchPanel />
      </SearchArea>
      <Dashboards>
        <Dashboard />
      </Dashboards>
    </DashboardWrapper>
  );
}

export default DashboardPage;
