const SINGLE_CHOICE = 'single-choice';
const OPTION = 'option';
const NAVIGATION = 'navigation';
const LABEL = 'label';
const SELECTION_CHOICE = 'selection-choice';
const DATA_ACQUISITION = 'data-acquisition';

const semanticAttributes = {
  SEMANTICS: [
    SINGLE_CHOICE,
    OPTION,
    NAVIGATION,
    LABEL,
    SELECTION_CHOICE,
    DATA_ACQUISITION
  ],
  [SINGLE_CHOICE]: ['type', 'element', 'disabled', 'name', 'value'],
  [OPTION]: ['selected', 'value', 'element'],
  [NAVIGATION]: ['to', 'element'],
  [LABEL]: ['text', 'element'],
  [SELECTION_CHOICE]: ['required', 'multiple', 'value', 'element'],
  [DATA_ACQUISITION]: [
    'type',
    'element',
    'value',
    'name',
    'required',
    'disabled'
  ]
};

const availableSemanticAttributes = (semantics) =>
  semanticAttributes[semantics];

const graphicAttributes = [
  'target',
  'expanded',
  'size',
  'shadow',
  'color',
  'font',
  'border'
];

const vocalAttributes = ['event', 'keyword'];
const availableEvents = [
  'click',
  'focus',
  'blur',
  'input',
  'change',
  'open',
  'clean'
];

const SEMANTICS = 'SEMANTICS';
const GRAPHICS = 'GRAPHICS';
const VOCAL = 'VOCAL';

const widgets = [
  /*{
    widget: SEMANTICS,
    attributes: availableSemanticAttributes
  },*/
  {
    widget: GRAPHICS,
    attributes: graphicAttributes
  },
  {
    widget: VOCAL,
    attributes: vocalAttributes
  }
];

export { widgets };
