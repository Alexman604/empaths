import * as  React from 'react'
import Drawer from '@mui/material/Drawer';
import Logo from "./Logo.png"
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButtonVector from "./IconButton.png"
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
        <Box >


            <AppBar position="fixed" color='inherit' elevation={1} sx={{ paddingLeft: "64px" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component="h6"

                        >
                            Dashboard
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton sx={{p:0}} size="large">
                                <Badge color="error" variant="dot" overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{
                                    '& .MuiBadge-badge': {
                                        top: '30%',
                                        transform: 'translateY(-50%)',
                                    }
                                }}>
                                    <NotificationsNoneOutlinedIcon sx={{ fontSize: '2rem' }} />
                                </Badge>
                            </IconButton>

                            <Typography variant="subtitle1" noWrap component="h6" sx={{ ml: 1 }}>
                                Saved searchers
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />
                            <Box paddingLeft={1} sx={{ marginRight: '87px' }} >

                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar variant="square" alt="Remy Sharp" src="/images/avatar.png" />
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

            <Box >
                
                                    </Box>


            <Drawer variant="permanent" sx={{ flexShrink: 0 }}>
                <Box marginY={2}>
                    <img src={Logo} alt="" />
                </Box>
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{
                            minHeight: 48,
                            width: 48,
                            justifyContent: 'center',
                            px: 2.5,
                        }}>
                            <img src={IconButtonVector} alt="" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{
                            minHeight: 48,
                            width: 48,
                            justifyContent: 'center',
                            px: 2.5,
                        }}>
                            <FlagOutlinedIcon />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{
                            minHeight: 48,
                            width: 48,
                            justifyContent: 'center',
                            px: 2.5,
                        }}>
                            <ChatBubbleOutlineOutlinedIcon />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>






        </Box>
    )
}

export default Home