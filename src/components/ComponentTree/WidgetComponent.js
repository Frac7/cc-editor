import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubHeader from '@material-ui/core/ListSubheader';

import inputs from './inputs';

const WidgetComponent = ({ widget, attributes }) => {
  return (
    <ListItem>
      <List subheader={<ListSubHeader>{widget}</ListSubHeader>}>
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
      </List>
    </ListItem>
  );
};

export default WidgetComponent;
