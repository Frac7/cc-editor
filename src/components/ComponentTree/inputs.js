import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  COLOR,
  BACKGROUND,
  DISABLED,
  SELECTED,
  REQUIRED,
  MULTIPLE,
  EXPANDED,
  SIZE,
  EVENT,
  SEMANTICS
} from './constants';

const TextInput = ({ name }) => (
  <TextField variant="outlined" label={name.toUpperCase()} {...{ name }} />
);

const BooleanInput = ({ name }) => (
  <FormControlLabel
    control={<Checkbox {...{ name }} />}
    label={name.toUpperCase()}
  />
);

const RadioInput = ({ name, options }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{name.toUpperCase()}</FormLabel>
    <RadioGroup {...{ name }}>
      {options &&
        options.map((option, key) => (
          <FormControlLabel
            {...{ key }}
            value={option}
            control={<Radio />}
            label={option.toUpperCase()}
          />
        ))}
    </RadioGroup>
  </FormControl>
);

const ColorInput = ({ name }) => (
  <>
    <FormLabel>{name.toUpperCase()}</FormLabel>
    <Input variant="outlined" fullWidth type="color" {...{ name }} />
  </>
);

const inputs = (attribute) => {
  switch (attribute) {
    case COLOR:
    case BACKGROUND:
      return ColorInput;
    case SEMANTICS:
    case SIZE:
    case EVENT:
      return RadioInput;
    case DISABLED:
    case SELECTED:
    case REQUIRED:
    case MULTIPLE:
    case EXPANDED:
      return BooleanInput;
    default:
      return TextInput;
  }
};

export default inputs;
