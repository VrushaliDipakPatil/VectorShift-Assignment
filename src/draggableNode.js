import { Paper, Typography } from '@mui/material';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Paper
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      sx={{
        cursor: 'grab',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        backgroundColor: '#1976d2',
        color: 'white',
        px: 2,
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      <Typography variant="body2">{label}</Typography>
    </Paper>
  );
};
