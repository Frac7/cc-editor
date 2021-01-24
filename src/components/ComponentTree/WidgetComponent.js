import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';

import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';

const WidgetComponent = ({ widget, attributes }) => {
  return (
    <>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">{widget}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <Add color="primary" />
          </IconButton>
          <IconButton>
            <Delete color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in>
        <Select variant="outlined" fullWidth>
          {attributes.map((attribute, key) => (
            <MenuItem {...{ key }}>
              <Typography>{attribute}</Typography>
            </MenuItem>
          ))}
        </Select>
      </Collapse>
    </>
  );
};

export default WidgetComponent;
