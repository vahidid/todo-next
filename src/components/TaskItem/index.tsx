'use client';

import { Task } from '@/models/Task';
import { Checkbox, Stack, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import moment from 'moment/moment';

interface IProps {
  item: Task;
}

// Style
const Wrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  padding: theme.spacing(2),
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius * 3,
}));

export default function TaskItem(props: IProps) {
  const { item } = props;

  return (
    <Wrapper>
      <Checkbox />
      <Typography>{item.title}</Typography>
      {item.datetime && (
        <Typography>{moment(item.datetime).format('llll')}</Typography>
      )}
    </Wrapper>
  );
}
