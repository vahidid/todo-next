'use client';
import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import Link from 'next/link';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';

export default function Login() {
  // Form
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: () => {
      console.log('submit');
    },
  });

  return (
    <PageWrapper justifyContent='center'>
      <Typography variant='h3'>Login</Typography>

      <Stack
        flex={1}
        justifyContent='center'
        spacing={5}
        component='form'
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={handleChange}
          name='email'
          onBlur={handleBlur}
          value={values.email}
          label='Email'
          variant='outlined'
        />
        <TextField
          onChange={handleChange}
          name='password'
          onBlur={handleBlur}
          value={values.password}
          label='Password'
          variant='outlined'
          type='password'
        />
        <Button variant='contained' fullWidth type='submit'>
          Login
        </Button>
      </Stack>

      <Typography textAlign='center'>Don’t have an account?</Typography>
      <Link href='/register'>
        <Typography
          textAlign='center'
          color='primary.main'
          textTransform='none'
        >
          Register
        </Typography>
      </Link>
    </PageWrapper>
  );
}
