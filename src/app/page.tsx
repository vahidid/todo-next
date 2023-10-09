import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import PageWrapper from '@/components/UI/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper justifyContent='space-between' py={10}>
      <Stack alignItems='center' flex={1} spacing={2}>
        <Typography variant='h3' textAlign='center'>Welcome to UpToDo</Typography>
        <Typography variant='body2' fontWeight={500}>
          Please login to your account or create new account to continue
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Button size='large' fullWidth variant='contained' color='primary'>
          Login
        </Button>
        <Button size='large' variant='outlined' color='primary'>
          Create Account
        </Button>
      </Stack>
    </PageWrapper>
  );
}
