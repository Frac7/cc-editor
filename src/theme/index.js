import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[700]
    }
  }
});

export default theme;
