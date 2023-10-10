'use client';

import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { Alert, IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { Event, Flag, LocalOffer } from '@mui/icons-material';
import AppHeader from '@/components/AppHeader';
import { useFormik } from 'formik';
import { TaskPriority } from '@/models/Task';
import { useCreateTaskMutation } from '@/services/TaskServices';
import { LoadingButton } from '@mui/lab';

export default function NewTask() {
  // Api
  const [trigger, { isLoading, isError, isSuccess }] = useCreateTaskMutation();

  // Form
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: '',
      description: '',
      datetime: undefined,
      tag: '',
      priority: TaskPriority.Medium,
    },
    onSubmit: async (formValues) => {
      const res = await trigger(formValues);
      console.log(res);
      console.log('Submit');
    },
  });
  return (
    <PageWrapper justifyContent='center' spacing={5}>
      <AppHeader />
      <Typography variant='h4'>New Task</Typography>

      {isError && (
        <Alert severity='error'>An error was occurred, try again</Alert>
      )}
      {isSuccess && <Alert severity='success'>Task successfully added</Alert>}

      <Stack flex={1} spacing={5} component='form' onSubmit={handleSubmit}>
        <TextField
          label='Title'
          value={values.title}
          onChange={handleChange}
          name='title'
          onBlur={handleBlur}
        />
        <TextField
          label='Description'
          multiline
          rows={5}
          value={values.description}
          onChange={handleChange}
          name='description'
          onBlur={handleBlur}
        />

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

        <LoadingButton
          loading={isLoading}
          variant='contained'
          color='primary'
          type='submit'
        >
          Save
        </LoadingButton>
      </Stack>
    </PageWrapper>
  );
}
