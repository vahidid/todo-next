'use client';

import { IconButton, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ChevronLeft } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function AppHeader() {
  const navigation = useRouter();

  return (
    <Stack
      direction='row'
      justifySelf='flex-start'
      justifyItems='flex-start'
      alignItems='center'
      spacing={2}
    >
      <IconButton onClick={() => navigation.back()}>
        <ChevronLeft />
      </IconButton>
      <Typography variant='subtitle1'>UpToDo</Typography>
    </Stack>
  );
}
