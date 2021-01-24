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

const SEMANTICS = 'SEMANTICS';
const GRAPHICS = 'GRAPHICS';
const VOCAL = 'VOCAL';

// const semanticAttributes = {
//   SEMANTICS: [
//     SINGLE_CHOICE,
//     OPTION,
//     NAVIGATION,
//     LABEL,
//     SELECTION_CHOICE,
//     DATA_ACQUISITION
//   ],
//   [SINGLE_CHOICE]: [
//     { name: 'type' },
//     { name: 'element' },
//     { name: 'disabled' },
//     { name: 'name' },
//     { name: 'value' }
//   ],
//   [OPTION]: [{ name: 'selected' }, { name: 'value' }, { name: 'element' }],
//   [NAVIGATION]: [{ name: 'to' }, { name: 'element' }],
//   [LABEL]: [{ name: 'text' }, { name: 'element' }],
//   [SELECTION_CHOICE]: [
//     { name: 'required' },
//     { name: 'multiple' },
//     { name: 'value' },
//     { name: 'element' }
//   ],
//   [DATA_ACQUISITION]: [
//     { name: 'type' },
//     { name: 'element' },
//     { name: 'value' },
//     { name: 'name' },
//     { name: 'required' },
//     { name: 'disabled' }
//   ]
// };
// const availableSemanticAttributes = (semantics) =>
//   semanticAttributes[semantics];

const semanticAttributes = [
  {
    name: SEMANTICS,
    options: [
      SINGLE_CHOICE,
      OPTION,
      NAVIGATION,
      LABEL,
      SELECTION_CHOICE,
      DATA_ACQUISITION
    ]
  },
  { name: 'element' },
  { name: 'name' },
  { name: 'type' },
  { name: 'value' },
  { name: 'text' },
  { name: 'to' },
  { name: 'selected' },
  { name: 'required' },
  { name: 'disabled' },
  { name: 'multiple' }
];

const SIZE = 'size';
const sizes = ['small', 'medium', 'large'];

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

const EVENT = 'event';

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

const widgets = [
  {
    widget: SEMANTICS,
    attributes: semanticAttributes
  },
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

export { COLOR, SIZE, EVENT, DISABLED, SELECTED, REQUIRED, MULTIPLE, EXPANDED };
