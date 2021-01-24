import { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import SaveIcon from '@material-ui/icons/Save';

import Sidebar from '../Sidebar';
import { ComponentTree } from '../../components';
import { Context, actions } from '../../store';

const RightSidebar = () => {
  const [state, dispatch] = useContext(Context);
  const handleNameChange = (event) =>
    dispatch({ type: actions.UPDATE_NAME, payload: event.target.value });
  const handleComponentSave = (event) => {
    event.preventDefault();
    dispatch({ type: actions.SAVE, payload: event.target });
  };

  return (
    <Sidebar component="form" onSubmit={handleComponentSave}>
      <Grid container justify="space-evenly">
        <Grid item xs={7}>
          <TextField
            color="primary"
            variant="outlined"
            value={state.name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={3}>
          <IconButton type="submit">
            <SaveIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ComponentTree />
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default RightSidebar;
