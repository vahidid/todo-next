'use client';

import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import {
  Alert,
  Box,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Event, Flag } from '@mui/icons-material';
import AppHeader from '@/components/AppHeader';
import { useFormik } from 'formik';
import { TaskPriority } from '@/models/Task';
import { useCreateTaskMutation } from '@/services/TaskServices';
import { LoadingButton } from '@mui/lab';
import ChooseDateTime from '@/components/ChooseDateTime';
import { useState } from 'react';
import moment from 'moment/moment';
import ChoosePriority from '@/components/ChoosePriority';

export default function NewTask() {
  // State
  const [dueModal, setDueModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);
  // Api
  const [trigger, { isLoading, isError, isSuccess }] = useCreateTaskMutation();

  // Form
  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        title: '',
        description: '',
        datetime: undefined,
        priority: TaskPriority.Medium,
      },
      onSubmit: async (formValues) => {
        await trigger(formValues);
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
          <Box>
            <Tooltip title='Set due date'>
              <IconButton onClick={() => setDueModal(true)}>
                <Event />
              </IconButton>
            </Tooltip>
            {values.datetime && (
              <Typography>{moment(values.datetime).format('llll')}</Typography>
            )}
          </Box>
          <Box>
            <Tooltip title='Set priority'>
              <IconButton onClick={() => setPriorityModal(true)}>
                <Flag />
              </IconButton>
            </Tooltip>
            {values.priority && (
              <Typography>{TaskPriority[values.priority]}</Typography>
            )}
          </Box>
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
      {/*  Set Due Date Modal */}
      <ChooseDateTime
        open={dueModal}
        onClose={() => setDueModal(false)}
        onSubmit={(date) => {
          setFieldValue('datetime', date.unix());
          setDueModal(false);
        }}
      />

      {/*  Set Priority */}
      <ChoosePriority
        onClose={() => setPriorityModal(false)}
        onSubmit={(p) => {
          setFieldValue('priority', p);
          setPriorityModal(false);
        }}
        open={priorityModal}
      />
    </PageWrapper>
  );
}
