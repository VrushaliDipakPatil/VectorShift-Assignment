// src/nodes/outputNode.js

import { BaseNode } from './BaseNode';

export const OutputNode = (props) => (
  <BaseNode
    {...props}
    label="Output"
    fields={[
      { label: 'Name', field: 'outputName', type: 'text' },
      { label: 'Type', field: 'outputType', type: 'select', options: ['Text', 'Image'] },
    ]}
    handles={[
      { id: 'value', type: 'target', position: 'left' },
    ]}
  />
);
