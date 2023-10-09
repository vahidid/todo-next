import { Stack, StackProps } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

function PageWrapper(props: PropsWithChildren & StackProps, ref: any) {
  const { children, ...other } = props;
  return <Stack ref={ref} height='100%' overflow='auto' py={5} {...other}>
    {children}
  </Stack>;
}


export default forwardRef(PageWrapper);
