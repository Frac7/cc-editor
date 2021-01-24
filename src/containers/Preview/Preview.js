import { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Context } from '../../store';

const useStyle = makeStyles((theme) => ({
  preview: {
    minHeight: '100vh'
  }
}));

const Preview = () => {
  const [state, dispatch] = useContext(Context);
  const classes = useStyle();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.preview}
    >
      <Grid item>
        <widget-container id="test-1">
          <widget-semantic
            value="btn"
            semantics="single-choice"
            type="button"
            element="red button"
          ></widget-semantic>
          <widget-semantic
            semantics="label"
            text="Large button"
          ></widget-semantic>
          <widget-vocal event="click" keyword="press"></widget-vocal>
          <widget-graphic
            color="white"
            background="#d32f2f"
            size="large"
            border="none"
          ></widget-graphic>
          <widget-graphic font="1rem Helvetica, sans-serif"></widget-graphic>
        </widget-container>
      </Grid>
    </Grid>
  );
};

export default Preview;
