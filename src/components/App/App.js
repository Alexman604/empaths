import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from '../../styles/theme';
import './App.css';
import Layout from '../Layout/Layout';
import SearchResults from '../SearchResults/SearchResults';
import DashboardPage from '../DashboardPage/DashboardPage';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/search" element={<SearchResults />} />
              <Route path="/" element={<DashboardPage />} />
              <Route element={<DashboardPage />} />
            </Routes>
          </Layout>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
