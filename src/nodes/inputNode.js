// src/nodes/InputNode.js

import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const InputNode = (props) => {
  const { id, data } = props;
  const updateField = useStore((state) => state.updateNodeField);

  const handleChange = (field) => (e) => {
    updateField(id, field, e.target.value);
  };

  return (
    <BaseNode
      {...props}
      label="Input"
      fields={[
        {
          label: 'Value',
          field: 'inputValue',
          type: 'text',
          value: data?.inputValue || '',
          onChange: handleChange('inputValue'),
        },
        {
          label: 'Variable',
          field: 'inputVar',
          type: 'text',
          value: data?.inputVar || '',
          onChange: handleChange('inputVar'),
        },
      ]}
      handles={[{ id: 'value', type: 'source', position: 'right' }]}
    />
  );
};
