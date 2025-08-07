// src/nodes/OutputNode.js

import { BaseNode } from './BaseNode';

export const OutputNode = (props) => (
  <BaseNode
    {...props}
    label="Output"
    fields={[
      { label: 'Name', field: 'outputName', type: 'text' },
      { label: 'Type', field: 'outputType', type: 'select', options: ['Text', 'Image'] },
      { label: 'Variable', field: 'inputVar', type: 'text' }, // Optional variable ref
    ]}
    handles={[
      { id: 'value', type: 'target', position: 'left' },
    ]}
  />
);
