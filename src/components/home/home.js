import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, createTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@emotion/react';
import { SearchHome } from './search';
import NumberOfCampaigns from './numberOfCampaigns';
import NumberOfApplications from './numberOfAppplocations';
import IconButtonVector from './IconButton.png';
import Logo from './Logo.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'avatar',
          },
          style: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: 0.14,
          },
        },
        {
          props: {
            variant: 'inputText',
          },
          style: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: 0.17,
          },
        },
      ],
    },
  },
  palette: {
    text: {
      primary: '#101010',
      secondary: '#636A7C',
      disabled: { main: 'rgba(0, 0, 0, 0.38)' },
    },
  },
});

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginLeft: '64px' }}>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={1}
          sx={{ paddingLeft: '64px' }}
        >
          <Container maxWidth="ml">
            <Toolbar disableGutters>
              <Typography variant="avatar" component="h6">
                Dashboard
              </Typography>
              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton sx={{ p: 0 }} size="large">
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

                <Typography
                  variant="inputText"
                  noWrap
                  component="h6"
                  sx={{ ml: 1 }}
                >
                  Saved searchers
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                <Box paddingLeft={1} sx={{ marginRight: '87px' }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        variant="square"
                        alt="Remy Sharp"
                        src="/images/avatar.png"
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
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box>
          <SearchHome />
        </Box>

        <Drawer variant="permanent" sx={{ flexShrink: 0 }}>
          <Box marginY={2}>
            <img src={Logo} alt="" />
          </Box>
          <Divider variant="middle" />
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  width: 48,
                  justifyContent: 'center',
                  px: 2.5,
                }}
              >
                <img src={IconButtonVector} alt="" />
              </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  width: 48,
                  justifyContent: 'center',
                  px: 2.5,
                }}
              >
                <FlagOutlinedIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  width: 48,
                  justifyContent: 'center',
                  px: 2.5,
                }}
              >
                <ChatBubbleOutlineOutlinedIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box display="flex" justifyContent="space-around">
          <NumberOfCampaigns />
          <NumberOfApplications />
        </Box>

        <Typography variant="avatar" color="textPrimary">
          {' '}
          Almost before we knew it, we had...
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {' '}
          Almost before we knew it, we had...
        </Typography>
        <Typography variant="h6">hello knew it, we had...</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
