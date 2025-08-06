import { Box, Button } from '@mui/material';

export const SubmitButton = () => {
  return (
    <Box display="flex" justifyContent="center" py={2}>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};
