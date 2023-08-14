import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppBar from './components/AppBar/AppBar';
import DrawerBar from './components/DrawerBar/DrawerBar';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <DrawerBar />

        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <AppBar />
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
