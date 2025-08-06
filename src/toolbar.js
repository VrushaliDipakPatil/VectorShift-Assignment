import { DraggableNode } from './draggableNode';
import { Box, Typography, Grid, Paper } from '@mui/material';

export const PipelineToolbar = () => {
  const nodeTypes = [
    { type: 'customInput', label: 'Input' },
    { type: 'llm', label: 'LLM' },
    { type: 'customOutput', label: 'Output' },
    { type: 'text', label: 'Text' },
    { type: 'numberInput', label: 'Number' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'concat', label: 'Concat' },
    { type: 'dropdown', label: 'Dropdown' },
    { type: 'randomizer', label: 'Randomizer' },
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Node Palette
      </Typography>
      <Grid container spacing={2}>
        {nodeTypes.map((node) => (
          <Grid item key={node.type} xs={6} sm={4} md={3} lg={2}>
            <DraggableNode type={node.type} label={node.label} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
