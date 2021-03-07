import { useContext, useMemo } from 'react';

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

  const {
    name,
    semantics,
    element,
    type,
    value,
    text,
    to,
    disabled,
    required,
    selected,
    multiple,
    color,
    target,
    background,
    font,
    shadow,
    border,
    size,
    expanded,
    event,
    keyword
  } = useMemo(() => state.widgets[state.current], [state]);

  if (
    state.current < 0 ||
    !state.widgets[state.current] ||
    !state.widgets[state.current].semantics
  ) {
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
        <widget-container id={name}>
          <widget-semantic
            semantics={semantics}
            element={getAttribute(element)}
            // name={getAttribute(name)}
            type={getAttribute(type)}
            value={getAttribute(value)}
            text={getAttribute(text)}
            to={getAttribute(to)}
            disabled={disabled || undefined}
            required={required || undefined}
            selected={selected || undefined}
            multiple={multiple || undefined}
          ></widget-semantic>
          <widget-graphic
            color={getAttribute(color)}
            target={getAttribute(target)}
            background={getAttribute(background)}
            font={getAttribute(font)}
            shadow={getAttribute(shadow)}
            border={getAttribute(border)}
            size={size}
            expanded={expanded || undefined}
          ></widget-graphic>
          <widget-vocal
            event={event}
            keyword={getAttribute(keyword)}
          ></widget-vocal>
        </widget-container>
      </Grid>
    </Grid>
  );
};

export default Preview;
