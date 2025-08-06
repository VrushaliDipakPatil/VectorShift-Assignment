import { BaseNode } from './BaseNode';

export const ConcatNode = (props) => (
  <BaseNode
    {...props}
    label="Concat Text"
    fields={[
      { label: 'Separator', field: 'separator', type: 'text' },
    ]}
    handles={[
      { id: 'input1', type: 'target', position: 'left', style: { top: '30%' } },
      { id: 'input2', type: 'target', position: 'left', style: { top: '60%' } },
      { id: 'result', type: 'source', position: 'right' },
    ]}
  />
);
