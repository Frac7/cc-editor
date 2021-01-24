const SINGLE_CHOICE = 'single-choice';
const OPTION = 'option';
const NAVIGATION = 'navigation';
const LABEL = 'label';
const SELECTION_CHOICE = 'selection-choice';
const DATA_ACQUISITION = 'data-acquisition';

const DISABLED = 'disabled';
const SELECTED = 'selected';
const REQUIRED = 'required';
const MULTIPLE = 'multiple';
const EXPANDED = 'expanded';

const semanticAttributes = {
  SEMANTICS: [
    SINGLE_CHOICE,
    OPTION,
    NAVIGATION,
    LABEL,
    SELECTION_CHOICE,
    DATA_ACQUISITION
  ],
  [SINGLE_CHOICE]: [
    { name: 'type' },
    { name: 'element' },
    { name: 'disabled' },
    { name: 'name' },
    'value'
  ],
  [OPTION]: [{ name: 'selected' }, { name: 'value' }, { name: 'element' }],
  [NAVIGATION]: [{ name: 'to' }, { name: 'element' }],
  [LABEL]: [{ name: 'text' }, { name: 'element' }],
  [SELECTION_CHOICE]: [
    { name: 'required' },
    { name: 'multiple' },
    { name: 'value' },
    { name: 'element' }
  ],
  [DATA_ACQUISITION]: [
    { name: 'type' },
    { name: 'element' },
    { name: 'value' },
    { name: 'name' },
    { name: 'required' },
    { name: 'disabled' }
  ]
};

const availableSemanticAttributes = (semantics) =>
  semanticAttributes[semantics];

const SIZE = 'size';
const sizes = ['SMALL', 'MEDIUM', 'LARGE'];

const COLOR = 'color';

const graphicAttributes = [
  { name: 'target' },
  { name: 'expanded' },
  { name: 'size', options: sizes },
  { name: 'shadow' },
  { name: 'color' },
  { name: 'font' },
  { name: 'border' }
];

const availableEvents = [
  'click',
  'focus',
  'blur',
  'input',
  'change',
  'open',
  'clean'
];
const vocalAttributes = [
  { name: 'event', options: availableEvents },
  { name: 'keyword' }
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

export default widgets;

export { COLOR, SIZE, DISABLED, SELECTED, REQUIRED, MULTIPLE, EXPANDED };
