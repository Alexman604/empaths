import React from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconWrap, Wrapper } from './styles';

function DrawerBar() {
  const theme = useTheme();

  const iconButtonStyles = {
    logo: {
      borderRadius: 8,
      cursor: 'pointer',
    },
    icons: {
      borderRadius: 8,
      padding: 12,
    },
  };

  return (
    <Wrapper>
      <IconWrap>
        <IconButton
          style={iconButtonStyles.logo}
          sx={{
            '&.MuiIconButton-root:hover': {
              backgroundColor: theme.colors['light-primary-shades-8-p'],
            },
          }}
        >
          <img src={theme.icons.empathsIcon} alt="Empaths" />
        </IconButton>
      </IconWrap>

      <IconButton
        style={iconButtonStyles.icons}
        sx={{
          marginTop: 2,
          '&.MuiIconButton-root:hover': {
            fill: theme.colors['light-primary-main'],
            backgroundColor: theme.colors['light-primary-shades-8-p'],
          },
        }}
      >
        <img src={theme.icons.dashboardOutlined} alt="Dashboard" />
      </IconButton>
      <IconButton
        style={iconButtonStyles.icons}
        sx={{
          '&.MuiIconButton-root:hover': {
            fill: theme.colors['light-primary-main'],
            backgroundColor: theme.colors['light-primary-shades-8-p'],
          },
        }}
      >
        <img src={theme.icons.outlinedFlag} alt="Flag" />
      </IconButton>
      <IconButton
        style={iconButtonStyles.icons}
        sx={{
          '&.MuiIconButton-root:hover': {
            fill: theme.colors['light-primary-main'],
            backgroundColor: theme.colors['light-primary-shades-8-p'],
          },
        }}
      >
        <img src={theme.icons.chatBubbleOutline} alt="Chat" />
      </IconButton>
      <IconButton
        style={{
          ...iconButtonStyles.icons,
        }}
        sx={{
          '&.MuiIconButton-root:hover': {
            color: theme.colors['light-primary-main'],
            backgroundColor: theme.colors['light-primary-shades-8-p'],
          },
        }}
      >
        <img src={theme.icons.extensionOutlined} alt="Extension" />
      </IconButton>
    </Wrapper>
  );
}

export default DrawerBar;
