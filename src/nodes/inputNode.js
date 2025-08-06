// src/nodes/inputNode.js

import { BaseNode } from './BaseNode';

export const InputNode = (props) => (
  <BaseNode
    {...props}
    label="Input"
    fields={[
      { label: 'Value', field: 'inputValue', type: 'text' },
      { label: 'Variable', field: 'inputVar', type: 'text' }, // <-- Allow user-defined variable name
    ]}
    handles={[
      { id: 'value', type: 'source', position: 'right' },
    ]}
  />
);
