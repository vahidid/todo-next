'use client';
import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useLoginMutation } from '@/services/AuthService';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function Login() {
  // Utils
  const navigate = useRouter();
  // Api
  const [trigger, { isLoading }] = useLoginMutation();

  // Form
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (formValues) => {
      const res = await trigger(formValues);
      if ('data' in res) {
        navigate.replace('/dashboard');
      } else {
        toast.error('Your credentials are not valid');
      }
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
        <LoadingButton
          loading={isLoading}
          variant='contained'
          fullWidth
          type='submit'
        >
          Login
        </LoadingButton>
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
