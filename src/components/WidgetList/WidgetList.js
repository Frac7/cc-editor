import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

const WidgetList = ({ items }) => (
  <List>
    {items.map((item, key) => (
      <ListItem button {...{ key }} onClick={() => {}}>
        <ListItemText primary={item.name} />
        <ListItemSecondaryAction>
          <IconButton>
            <Delete color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default WidgetList;
