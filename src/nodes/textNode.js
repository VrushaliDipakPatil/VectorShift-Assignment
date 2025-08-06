// src/nodes/textNode.js

import { BaseNode } from './BaseNode';

export const TextNode = (props) => (
  <BaseNode
    {...props}
    label="Text"
    fields={[
      { label: 'Text', field: 'text', type: 'text' },
    ]}
    handles={[
      { id: 'output', type: 'source', position: 'right' },
    ]}
  />
);
