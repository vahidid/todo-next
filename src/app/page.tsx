import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import PageWrapper from '@/components/UI/PageWrapper';
import Link from 'next/link';

export default function HomePage() {
  return (
    <PageWrapper justifyContent='space-between' py={10}>
      <Stack alignItems='center' flex={1} spacing={2}>
        <Typography variant='h3' textAlign='center'>
          Welcome to UpToDo
        </Typography>
        <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
          Please login to your account or create new account to continue
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Button
          size='large'
          fullWidth
          variant='contained'
          color='primary'
          component={Link}
          href='/login'
        >
          Login
        </Button>
        <Button
          size='large'
          variant='outlined'
          color='primary'
          component={Link}
          href='/register'
        >
          Create Account
        </Button>
      </Stack>
    </PageWrapper>
  );
}
