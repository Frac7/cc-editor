import List from '@material-ui/core/List';

import WidgetComponent from './WidgetComponent';

import widgets from './constants';

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
