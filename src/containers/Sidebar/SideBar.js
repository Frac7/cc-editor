import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1rem',
    height: 'calc(100vh - 2rem)'
  }
}));

const Sidebar = ({ ...props }) => {
  const classes = useStyles();

  return <Paper square elevation={1} {...props} className={classes.paper} />;
};

export default Sidebar;
