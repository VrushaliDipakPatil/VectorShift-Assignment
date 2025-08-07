import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import {
  Paper,
  Typography,
  TextareaAutosize,
} from '@mui/material';
import { useStore } from '../store';

const extractVariables = (text) => {
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const variables = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    variables.add(match[1]);
  }
  return Array.from(variables);
};

export const TextNode = ({ id, data, selected }) => {
  const [text, setText] = useState(data.text || '');
  const [variables, setVariables] = useState([]);
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    const extracted = extractVariables(text);
    setVariables(extracted);

    updateNodeField(id, 'text', text);
    updateNodeField(id, 'variables', extracted);
  }, [text]);

  return (
    <Paper
      elevation={selected ? 6 : 3}
      sx={{
        width: 240,
        minHeight: 120,
        p: 2,
        border: selected ? '2px solid #1976d2' : '1px solid #ccc',
        borderRadius: 2,
        backgroundColor: selected ? '#f0f8ff' : '#fff',
        position: 'relative',
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Text
      </Typography>

      <TextareaAutosize
        minRows={3}
        style={{
          width: '100%',
          resize: 'none',
          fontSize: '14px',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontFamily: 'inherit',
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here (e.g. Hello {{name}})"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#1976d2',
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />

      {variables.map((variable, idx) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-var-${variable}`}
          style={{
            top: 40 + idx * 20,
            background: '#1976d2',
            width: 10,
            height: 10,
            borderRadius: '50%',
          }}
        />
      ))}
    </Paper>
  );
};
