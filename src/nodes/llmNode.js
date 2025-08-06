// src/nodes/llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = (props) => (
  <BaseNode
    {...props}
    label="LLM"
    fields={[]}
    handles={[
      { id: 'system', type: 'target', position: 'left', style: { top: '33%' } },
      { id: 'prompt', type: 'target', position: 'left', style: { top: '66%' } },
      { id: 'response', type: 'source', position: 'right' },
    ]}
  />
);
