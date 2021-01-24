import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

const WidgetList = ({ items, handleRemoveWidget }) => (
  <List>
    {Object.entries(items).map(([key, value]) => (
      <ListItem button {...{ key }}>
        <ListItemText primary={value.name} />
        <ListItemSecondaryAction>
          <IconButton onClick={handleRemoveWidget(key)}>
            <Delete color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default WidgetList;
