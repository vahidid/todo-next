'use client';
import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { CircularProgress, Fab, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import Link from 'next/link';
import { useGetAllTasksQuery } from '@/services/TaskServices';
import NoTasks from '@/components/NoTasks';
import TaskItem from '@/components/TaskItem';

export default function Dashboard() {
  const { data, isLoading } = useGetAllTasksQuery(undefined);

  return (
    <PageWrapper justifyContent='center' alignItems='center'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant='h6'>Welcome to UpToDo</Typography>

          {data && data.length > 0 ? (
            <Stack flex={1} py={4} width='100%' spacing={2}>
              {data.map((item) => (
                <TaskItem key={item.id} item={item} />
              ))}
            </Stack>
          ) : (
            <NoTasks />
          )}

          <Fab component={Link} href='/new_task'>
            <Add />
          </Fab>
        </>
      )}
    </PageWrapper>
  );
}
