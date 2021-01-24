import { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

import Sidebar from '../Sidebar';
import { WidgetList } from '../../components';

import { Context, actions } from '../../store';

import { NEW_COMPONENT } from '../../global';

const LeftSidebar = () => {
  const [state, dispatch] = useContext(Context);
  const handleAddWidget = () =>
    dispatch({
      type: actions.ADD_WIDGET,
      payload: { name: `${NEW_COMPONENT} #${state.left.counter}` }
    });
  const handleRemoveWidget = (key) => () =>
    dispatch({ type: actions.REMOVE_WIDGET, payload: key });

  return (
    <Sidebar>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs={7}>
          <Typography variant="h4" color="primary">
            Widget list
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <IconButton onClick={handleAddWidget}>
            <Add color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <WidgetList items={state.left.widgets} {...{ handleRemoveWidget }} />
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default LeftSidebar;
