import { BaseNode } from './BaseNode';
export const CheckboxNode = (props) => (
  <BaseNode
    {...props}
    label="Checkbox"
    fields={[
      { label: 'Checked', field: 'checked', type: 'select', options: ['true', 'false'] },
    ]}
    handles={[{ id: 'value', type: 'source', position: 'right' }]}
  />
);
