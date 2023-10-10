'use client';

import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { Event, Flag, LocalOffer } from '@mui/icons-material';
import Button from '@mui/material/Button';
import AppHeader from '@/components/AppHeader';

export default function NewTask() {
  return (
    <PageWrapper justifyContent='center' spacing={5}>
      <AppHeader />
      <Typography variant='h4'>New Task</Typography>

      <Stack flex={1} spacing={5}>
        <TextField label='Title' />
        <TextField label='Description' multiline rows={5} />

        <Stack direction='row' justifyContent='space-between'>
          <Tooltip title='Add event date'>
            <IconButton>
              <Event />
            </IconButton>
          </Tooltip>

          <Tooltip title='Add a tag'>
            <IconButton>
              <LocalOffer />
            </IconButton>
          </Tooltip>
          <Tooltip title='Set priority'>
            <IconButton>
              <Flag />
            </IconButton>
          </Tooltip>
        </Stack>

        <Button variant='contained' color='primary'>
          Save
        </Button>
      </Stack>
    </PageWrapper>
  );
}
