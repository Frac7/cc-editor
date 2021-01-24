import { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import SaveIcon from '@material-ui/icons/Save';

import Sidebar from '../Sidebar';
import { ComponentTree } from '../../components';

import { Context, actions } from '../../store';
import { NEW_WIDGET } from '../../global';

const RightSidebar = () => {
  const [state, dispatch] = useContext(Context);
  const handleComponentSave = (event) => {
    event.preventDefault();
    dispatch({
      type: actions.SAVE_WIDGET,
      payload: [...event.target.elements].reduce(
        (accumulator, field) => ({ ...accumulator, [field.name]: field.value }),
        {}
      )
    });
  };

  return (
    state.current > -1 && (
      <Sidebar component="form" onSubmit={handleComponentSave}>
        <Grid container justify="space-evenly">
          <Grid item xs={7}>
            <TextField
              name="name"
              color="primary"
              variant="outlined"
              defaultValue={
                state.widgets[state.current]
                  ? state.widgets[state.current].name
                  : `${NEW_WIDGET} #${state.counter}`
              }
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
    )
  );
};

export default RightSidebar;
