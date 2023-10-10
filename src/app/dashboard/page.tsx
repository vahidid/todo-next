import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import SvgTest from '@/assets/vectors/index-empty.svg';
import Image from 'next/image';
import { Fab, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <PageWrapper justifyContent='center' alignItems='center'>
      <Typography variant='h6'>Welcome to UpToDo</Typography>

      <Stack flex={1} height='100%' alignItems='center' justifyContent='center'>
        <Image src={SvgTest} alt='EmptyList' loading='lazy' />

        <Typography>What do you want to do today?</Typography>
        <Typography variant='caption'>Tap + to add your tasks</Typography>
      </Stack>

      <Fab component={Link} href='/new_task'>
        <Add />
      </Fab>
    </PageWrapper>
  );
}
