'use client';

import Image from 'next/image';
import SvgTest from '@/assets/vectors/index-empty.svg';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function NoTasks() {
  return (
    <Stack flex={1} height='100%' alignItems='center' justifyContent='center'>
      <Image src={SvgTest} alt='EmptyList' loading='lazy' />

      <Typography>What do you want to do today?</Typography>
      <Typography variant='caption'>Tap + to add your tasks</Typography>
    </Stack>
  );
}
