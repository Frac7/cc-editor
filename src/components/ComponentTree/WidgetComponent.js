import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubHeader from '@material-ui/core/ListSubheader';

import TextField from '@material-ui/core/TextField';

const WidgetComponent = ({ widget, attributes }) => {
  return (
    <ListItem>
      <List subheader={<ListSubHeader>{widget}</ListSubHeader>}>
        {attributes.map((attribute) => (
          <ListItem>
            <ListItemText>
              <TextField variant="outlined" label={attribute.toUpperCase()} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </ListItem>
  );
};

export default WidgetComponent;
