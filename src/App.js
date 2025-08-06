import { Container, CssBaseline } from '@mui/material';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </Container>
    </>
  );
}

export default App;
