// src/nodes/inputNode.js

import { BaseNode } from './BaseNode';

export const InputNode = (props) => (
  <BaseNode
    {...props}
    label="Input"
    fields={[
      { label: 'Name', field: 'inputName', type: 'text' },
      { label: 'Type', field: 'inputType', type: 'select', options: ['Text', 'File'] },
    ]}
    handles={[
      { id: 'value', type: 'source', position: 'right' },
    ]}
  />
);
