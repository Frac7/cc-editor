import { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Context } from '../../store';

import { getAttribute } from './utils';

const useStyle = makeStyles((theme) => ({
  preview: {
    minHeight: '100vh'
  }
}));

const Preview = () => {
  const [state] = useContext(Context);
  const classes = useStyle();

  if (state.current < 0 || !state.widgets[state.current].semantics) {
    return null;
  }

  return (
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
            element={getAttribute(state.widgets[state.current].element)}
            // name={getAttribute(state.widgets[state.current].name)}
            type={getAttribute(state.widgets[state.current].type)}
            value={getAttribute(state.widgets[state.current].value)}
            text={getAttribute(state.widgets[state.current].text)}
            to={getAttribute(state.widgets[state.current].to)}
            disabled={state.widgets[state.current].disabled || undefined}
            required={state.widgets[state.current].required || undefined}
            selected={state.widgets[state.current].selected || undefined}
            multiple={state.widgets[state.current].multiple || undefined}
          ></widget-semantic>
          <widget-graphic
            color={getAttribute(state.widgets[state.current].color)}
            target={getAttribute(state.widgets[state.current].target)}
            background={getAttribute(state.widgets[state.current].background)}
            font={getAttribute(state.widgets[state.current].font)}
            shadow={getAttribute(state.widgets[state.current].shadow)}
            border={getAttribute(state.widgets[state.current].border)}
            size={state.widgets[state.current].size}
            expanded={state.widgets[state.current].expanded || undefined}
          ></widget-graphic>
          <widget-vocal
            event={state.widgets[state.current].event}
            keyword={getAttribute(state.widgets[state.current].keyword)}
          ></widget-vocal>
        </widget-container>
      </Grid>
    </Grid>
  );
};

export default Preview;
