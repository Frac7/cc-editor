import List from '@material-ui/core/List';
import widgets from './constants';

import WidgetComponent from './WidgetComponent';

const ComponentTree = () => {
  return (
    <List>
      {widgets.map((widget, key) => (
        <WidgetComponent {...{ ...widget, key }} />
      ))}
    </List>
  );
};

export default ComponentTree;
