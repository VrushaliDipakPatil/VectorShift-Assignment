// src/nodes/NumberInputNode.js

import { BaseNode } from './BaseNode';

export const NumberInputNode = (props) => (
  <BaseNode
    {...props}
    label="Number Input"
    fields={[
      { label: 'Value', field: 'numberValue', type: 'text' },
      { label: 'Variable', field: 'inputVar', type: 'text' },
    ]}
    handles={[
      { id: 'value', type: 'source', position: 'right' },
    ]}
  />
);
