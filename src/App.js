import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';

import { RightSidebar } from './containers';

import theme from './theme';

const App = () => (
  <ThemeProvider {...{ theme }}>
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={3}>
        <RightSidebar />
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default App;
