import { CssBaseline, Container, Box, Typography } from '@mui/material';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            AI Workflow Pipeline
          </Typography>

          <PipelineToolbar />
          <PipelineUI />
          <SubmitButton />
        </Box>
      </Container>
    </>
  );
}

export default App;
