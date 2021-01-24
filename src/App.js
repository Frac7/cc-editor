import Grid from '@material-ui/core/Grid';

import { RightSidebar } from './containers';

const App = () => (
  <Grid container>
    <Grid item xs={3}></Grid>
    <Grid item xs={6}></Grid>
    <Grid item xs={3}>
      <RightSidebar />
    </Grid>
  </Grid>
);

export default App;
