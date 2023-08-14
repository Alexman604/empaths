import React, { useState } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Badge,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useTheme } from '@emotion/react';
import { Wrapper, BreadCramps, RightSide } from './style';

function AppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ['Settings', 'Profile', 'Logout'];

  return (
    <Wrapper>
      <BreadCramps>
        <Typography variant="h6" component="h6">
          Dashboard
        </Typography>
      </BreadCramps>
      <RightSide>
        <IconButton
          sx={{
            padding: 1,
            borderRadius: 1,
            '&.MuiIconButton-root:hover': {
              backgroundColor: theme.colors['light-primary-shades-8-p'],
            },
          }}
          size="large"
        >
          <Badge
            color="error"
            variant="dot"
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{
              '& .MuiBadge-badge': {
                top: '30%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ fontSize: '2rem' }} />
          </Badge>
        </IconButton>

        <Typography variant="body2" noWrap component="h6" sx={{ ml: 1 }}>
          Saved searches
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box paddingLeft={2} sx={{ marginRight: '87px' }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                variant="square"
                alt="User Avatar"
                src={theme.images.avatar}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </RightSide>
    </Wrapper>
  );
}

export default AppBar;
