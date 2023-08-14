import { createTheme } from '@mui/material/styles';
import { images } from './images';
import { colors } from './colors';
import { icons } from './icons';

const theme = createTheme({
  colors,
  icons,
  images,
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ff6b6b',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
