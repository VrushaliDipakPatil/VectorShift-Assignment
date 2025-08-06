import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Box,
} from '@mui/material';

const handlePositions = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export const BaseNode = ({
  id,
  data,
  label,
  fields = [],
  handles = [],
  selected,
}) => {
  const [localData, setLocalData] = useState(data || {});

  useEffect(() => {
    if (data) {
      Object.assign(data, localData);
    }
  }, [localData]);

  const handleFieldChange = (field, value) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Paper
      elevation={selected ? 6 : 3}
      sx={{
        width: 240,
        p: 2,
        border: selected ? '2px solid #1976d2' : '1px solid #ccc',
        backgroundColor: selected ? '#f0f8ff' : '#fff',
        borderRadius: 2,
        position: 'relative',
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {label}
      </Typography>

      {fields.map(({ type, label, field, options }) => (
        <Box key={field} sx={{ mb: 2 }}>
          {type === 'select' ? (
            <TextField
              select
              fullWidth
              size="small"
              label={label}
              value={localData[field] || ''}
              onChange={(e) => handleFieldChange(field, e.target.value)}
            >
              {(options || []).map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <TextField
              fullWidth
              size="small"
              label={label}
              value={localData[field] || ''}
              onChange={(e) => handleFieldChange(field, e.target.value)}
            />
          )}
        </Box>
      ))}

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handlePositions[handle.position]}
          id={`${id}-${handle.id}`}
          style={{
            background: '#1976d2',
            width: 10,
            height: 10,
            borderRadius: '50%',
            ...handle.style,
          }}
        />
      ))}
    </Paper>
  );
};
