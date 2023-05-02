import React from 'react'
import Drawer from '@mui/material/Drawer';
import Logo from "./Logo.png"
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButtonVector from "./IconButton.png"
import ListItemIcon from '@mui/material/ListItemIcon';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';



function Home() {
    return (
        <>
            <Drawer
                variant="permanent"
            // open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
            >
                <Box marginY={2}>

                    <img src={Logo} alt="" />
                </Box>
                {/* {list(anchor)} */}
                <List >
                    <ListItem disablePadding sx={{ display: 'block', marginLeft: 1 }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            width: 48,

                            justifyContent: 'center',
                            px: 2.5,
                        }}>
                           <img src={IconButtonVector} alt="" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', marginLeft: 1 }}>
                        <ListItemButton sx={{
                            minHeight: 48,
                            width: 48,

                            justifyContent: 'center',
                            px: 2.5,
                        }}>
                            <FlagOutlinedIcon />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', marginLeft: 1 }}>
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

        </>
    )
}

export default Home