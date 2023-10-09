import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function HomePage() {
  return (
    <Stack>
      <Box>
        <Typography>Welcome to UpToDo</Typography>
        <Typography>
          Please login to your account or create new account to continue
        </Typography>
      </Box>
    </Stack>
  );
}
