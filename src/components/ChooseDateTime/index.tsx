'use client';

import { StaticDateTimePicker } from '@mui/x-date-pickers';
import moment, { Moment } from 'moment/moment';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

interface IProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (date: Moment) => void;
}

export default function ChooseDateTime(props: IProps) {
  const { open, onClose, onSubmit } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          backgroundImage: 'none',
          bgcolor: 'background.paper',
        },
      }}
    >
      <DialogTitle>Set a due date for your task</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <StaticDateTimePicker
            onAccept={(date) => {
              if (date) {
                onSubmit(date);
              }
            }}
            defaultValue={moment()}
            slotProps={{
              layout: {
                sx: { bgcolor: 'background.paper' },
              },
            }}
          />
        </LocalizationProvider>
      </DialogContent>
    </Dialog>
  );
}
