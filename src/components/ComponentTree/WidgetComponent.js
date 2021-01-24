import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';

const WidgetComponent = ({ widget }) => {
  return (
    <ListItem>
      <ListItemText>{widget}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <Add color="primary" />
        </IconButton>
        <IconButton>
          <Delete color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default WidgetComponent;
