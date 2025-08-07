// src/nodes/DropdownNode.js

import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const DropdownNode = (props) => {
  const { id, data } = props;
  const updateField = useStore((state) => state.updateNodeField);

  const handleChange = (e) => {
    updateField(id, 'dropdownChoice', e.target.value);
  };

  return (
    <BaseNode
      {...props}
      label="Dropdown"
      fields={[
        {
          label: 'Choice',
          field: 'dropdownChoice',
          type: 'select',
          options: ['A', 'B', 'C'],
          onChange: handleChange,
          value: data?.dropdownChoice || '',
        },
      ]}
      handles={[{ id: 'value', type: 'source', position: 'right' }]}
    />
  );
};
