import { BaseNode } from './BaseNode';
export const DropdownNode = (props) => (
  <BaseNode
    {...props}
    label="Dropdown"
    fields={[
      { label: 'Choice', field: 'dropdownChoice', type: 'select', options: ['A', 'B', 'C'] },
    ]}
    handles={[{ id: 'value', type: 'source', position: 'right' }]}
  />
);
