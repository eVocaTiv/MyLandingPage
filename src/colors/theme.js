import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B7A9D9',
      main: '#895AF3',
      dark: '#392B59',
      elegant: '#8C81A6',
      dull: '#4C4659',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00C2CB',
      main: '#CC70AB',
      dark: '#803966',
      dull: '#407C80',
      elegant: '#EECC00',
      contrastText: '#000',
    },
    common: {
      dark: '#000000',
      light: '#ffffff',
    }
  },
  fonts: {
    primary:'Julius Sans One',
    secondary: 'Great Vibes',
  }
});

export default theme;