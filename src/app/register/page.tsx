'use client';
import PageWrapper from '@/components/UI/PageWrapper';
import Typography from '@mui/material/Typography';
import { FormControl, FormHelperText, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useRegisterMutation } from '@/services/AuthService';
import { useRouter } from 'next/navigation';

export default function Register() {
  // Utils
  const navigate = useRouter();
  // Api
  const [trigger] = useRegisterMutation();

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

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      validationSchema: FormValidation,
      onSubmit: async (formValues) => {
        await trigger(formValues);
        navigate.replace('/dashboard');
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
        <FormControl>
          <TextField
            onChange={handleChange}
            name='name'
            onBlur={handleBlur}
            value={values.name}
            label='Name'
            variant='outlined'
            error={touched.name && Boolean(errors.name)}
          />
          {touched.name && Boolean(errors.name) ? (
            <FormHelperText error>{errors.name}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <TextField
            onChange={handleChange}
            name='email'
            onBlur={handleBlur}
            value={values.email}
            label='Email'
            variant='outlined'
            error={touched.email && Boolean(errors.email)}
          />
          {touched.email && Boolean(errors.email) ? (
            <FormHelperText error>{errors.email}</FormHelperText>
          ) : null}
        </FormControl>

        <FormControl>
          <TextField
            onChange={handleChange}
            name='password'
            type='password'
            onBlur={handleBlur}
            value={values.password}
            label='Password'
            variant='outlined'
            error={touched.password && Boolean(errors.password)}
          />

          {touched.password && Boolean(errors.password) ? (
            <FormHelperText error>{errors.password}</FormHelperText>
          ) : null}
        </FormControl>

        <FormControl>
          <TextField
            onChange={handleChange}
            name='password_confirmation'
            type='password'
            onBlur={handleBlur}
            value={values.password_confirmation}
            label='Confirm Password'
            variant='outlined'
            error={
              touched.password_confirmation &&
              Boolean(errors.password_confirmation)
            }
          />
          {touched.password_confirmation &&
          Boolean(errors.password_confirmation) ? (
            <FormHelperText error>
              {errors.password_confirmation}
            </FormHelperText>
          ) : null}
        </FormControl>
        <LoadingButton variant='contained' fullWidth type='submit'>
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
