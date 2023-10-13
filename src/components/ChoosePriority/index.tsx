'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  styled,
} from '@mui/material';
import { TaskPriority } from '@/models/Task';
import { Theme } from '@mui/system';
import { useState } from 'react';
import Button from '@mui/material/Button';

interface IProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (priority: TaskPriority) => void;
}

const generateBgColor = (priority: TaskPriority, theme: Theme) => {
  switch (priority) {
    case TaskPriority.Emergency:
      return theme.palette.error.main;
    case TaskPriority.High:
      return theme.palette.warning.main;
    case TaskPriority.Medium:
      return theme.palette.info.main;
    case TaskPriority.Low:
      return theme.palette.grey['500'];
  }
};

const SelectItem = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'type',
})<{ type: TaskPriority }>(({ theme, type }) => ({
  backgroundColor: generateBgColor(type, theme),
  padding: theme.spacing(1, 2),
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: 'transparent',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  '&.selected': {
    borderColor: theme.palette.action.active,
  },
}));

export default function ChoosePriority(props: IProps) {
  const { open, onClose, onSubmit } = props;

  const [priority, setPriority] = useState<TaskPriority>();

  return (
    <Dialog open={open} onClose={onClose} maxWidth='xs' fullWidth>
      <DialogTitle>Set priority</DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <SelectItem
            className={priority === TaskPriority.Low ? 'selected' : ''}
            onClick={() => setPriority(TaskPriority.Low)}
            type={TaskPriority.Low}
          >
            Low
          </SelectItem>
          <SelectItem
            className={priority === TaskPriority.Medium ? 'selected' : ''}
            onClick={() => setPriority(TaskPriority.Medium)}
            type={TaskPriority.Medium}
          >
            Medium
          </SelectItem>
          <SelectItem
            className={priority === TaskPriority.High ? 'selected' : ''}
            onClick={() => setPriority(TaskPriority.High)}
            type={TaskPriority.High}
          >
            High
          </SelectItem>
          <SelectItem
            className={priority === TaskPriority.Emergency ? 'selected' : ''}
            onClick={() => setPriority(TaskPriority.Emergency)}
            type={TaskPriority.Emergency}
          >
            Emergency
          </SelectItem>
        </Stack>
        <Button
          fullWidth
          variant='outlined'
          color='primary'
          sx={{ mt: 4 }}
          disabled={!priority}
          onClick={() => {
            if (priority) {
              onSubmit(priority);
            }
          }}
        >
          Choose
        </Button>
      </DialogContent>
    </Dialog>
  );
}
