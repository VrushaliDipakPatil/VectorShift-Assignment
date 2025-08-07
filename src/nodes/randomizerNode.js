// src/nodes/RandomizerNode.js

import { BaseNode } from './BaseNode';

export const RandomizerNode = (props) => (
  <BaseNode
    {...props}
    label="Random Picker"
    fields={[
      { label: 'Option 1', field: 'opt1', type: 'text' },
      { label: 'Option 2', field: 'opt2', type: 'text' },
      { label: 'Variable', field: 'inputVar', type: 'text' },
    ]}
    handles={[
      { id: 'out', type: 'source', position: 'right' },
    ]}
  />
);
