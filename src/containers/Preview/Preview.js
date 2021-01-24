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
  const [state] = useContext(Context);
  const classes = useStyle();

  return (
    state.current > -1 && (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.preview}
      >
        <Grid item>
          <widget-container id={state.widgets[state.current].name}>
            <widget-semantic
              semantics={state.widgets[state.current].semantics}
              element={state.widgets[state.current].element}
              // name={state.widgets[state.current].name}
              type={state.widgets[state.current].type}
              value={state.widgets[state.current].value}
              text={state.widgets[state.current].text}
              to={state.widgets[state.current].to}
            ></widget-semantic>
            <widget-graphic
              color={state.widgets[state.current].color}
              target={state.widgets[state.current].target}
              background={state.widgets[state.current].background}
              font={state.widgets[state.current].font}
              shadow={state.widgets[state.current].shadow}
              border={state.widgets[state.current].border}
              size={state.widgets[state.current].size}
              expanded={state.widgets[state.current].expanded}
            ></widget-graphic>
            <widget-vocal
              event={state.widgets[state.current].event}
              keyword={state.widgets[state.current].keyword}
            ></widget-vocal>
          </widget-container>
        </Grid>
      </Grid>
    )
  );
};

export default Preview;
