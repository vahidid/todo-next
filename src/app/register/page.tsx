'use client';
import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import useSWRMutation from 'swr/mutation';
import { RegisterService } from '@/services/AuthService';

export default function Register() {
  // Api
  const { trigger, isMutating } = useSWRMutation(
    '/api/register',
    RegisterService
  );
  // Validation
  const FormValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email("It's not a valid email address"),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Your password is too short.'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
  });

  const { values, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: FormValidation,
    onSubmit: async (formValues) => {
      await trigger({
        email: formValues.email,
        name: formValues.name,
        password: formValues.password,
      });
      console.log('submit');
    },
  });

  return (
    <PageWrapper justifyContent='space-between'>
      <Typography variant='h3'>Register</Typography>

      <Stack
        flex={1}
        justifyContent='center'
        spacing={5}
        component='form'
        onSubmit={handleSubmit}
      >
        <Typography variant='body1'>
          Please complete fields to register a new account
        </Typography>
        <TextField
          onChange={handleChange}
          name='name'
          onBlur={handleBlur}
          value={values.name}
          label='Name'
          variant='outlined'
        />
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
          type='password'
          onBlur={handleBlur}
          value={values.password}
          label='Password'
          variant='outlined'
        />
        <TextField
          onChange={handleChange}
          name='password_confirmation'
          type='password'
          onBlur={handleBlur}
          value={values.password_confirmation}
          label='Confirm Password'
          variant='outlined'
        />
        <LoadingButton
          loading={isMutating}
          variant='contained'
          fullWidth
          type='submit'
        >
          Register
        </LoadingButton>
      </Stack>

      <Typography textAlign='center'>Already have an account?</Typography>
      <Link href='/login'>
        <Typography
          textAlign='center'
          color='primary.main'
          textTransform='none'
        >
          Login
        </Typography>
      </Link>
    </PageWrapper>
  );
}
