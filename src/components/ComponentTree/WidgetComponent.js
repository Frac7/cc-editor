import { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubHeader from '@material-ui/core/ListSubheader';

import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';

import inputs from './inputs';

const WidgetComponent = ({ widget, attributes }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((open) => !open);

  return (
    <ListItem>
      <List
        subheader={
          <ListSubHeader>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography>{widget.toUpperCase()}</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={handleOpen}>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Grid>
            </Grid>
          </ListSubHeader>
        }
      >
        <Collapse in={open}>
          {attributes.map(({ name, options }, key) => {
            const Input = inputs(name);
            return (
              <ListItem {...{ key }}>
                <ListItemText>
                  <Input {...{ name, options }} />
                </ListItemText>
              </ListItem>
            );
          })}
        </Collapse>
      </List>
    </ListItem>
  );
};

export default WidgetComponent;
