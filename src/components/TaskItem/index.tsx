'use client';

import { Task, TaskPriority } from '@/models/Task';
import { Checkbox, Chip, Stack, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import moment from 'moment/moment';

interface IProps {
  item: Task;
}

const generateChipVar = (priority: TaskPriority) => {
  switch (priority) {
    case TaskPriority.Emergency:
      return 'error';
    case TaskPriority.High:
      return 'warning';
    case TaskPriority.Medium:
      return 'info';
    case TaskPriority.Low:
      return 'default';
  }
};

// Style
const Wrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  padding: theme.spacing(2),
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
}));

export default function TaskItem(props: IProps) {
  const { item } = props;

  return (
    <Wrapper>
      <Checkbox />
      <Stack spacing={2} width='100%'>
        <Typography>{item.title}</Typography>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          {item.datetime && (
            <Typography>{moment(item.datetime).format('llll')}</Typography>
          )}
          <Chip
            label={TaskPriority[item.priority]}
            variant='filled'
            color={generateChipVar(item.priority)}
          />
        </Stack>
      </Stack>
    </Wrapper>
  );
}
