import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CButton from '@/components/common/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Copyright from '@/components/common/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, CssBaseline, Link, ThemeProvider, Typography, createTheme } from '@mui/material';

const defaultTheme = createTheme();

interface SubmitFormProps {
  submitFormTitle: string;
  fields: {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
  }[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  checkboxLabel?: string;
  onCheckboxChange?: (checked: boolean) => void;
}

function SubmitForm({
  submitFormTitle,
  fields,
  onSubmit,
  buttonText,
  checkboxLabel,
  onCheckboxChange,
}: SubmitFormProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {submitFormTitle}
          </Typography>
          <Box component='form' noValidate onSubmit={onSubmit} sx={{ mt: 8 }}>
            <Grid container spacing={2}>
              {fields.map(field => (
                <Grid item xs={12} key={field.name}>
                  <TextField
                    required={field.required}
                    fullWidth
                    id={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type || 'text'}
                    autoComplete={field.autoComplete}
                  />
                </Grid>
              ))}
              {checkboxLabel && (
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color='primary' onChange={e => onCheckboxChange?.(e.target.checked)} />}
                    label={checkboxLabel}
                  />
                </Grid>
              )}
            </Grid>
            <CButton fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} text={buttonText} />
            {submitFormTitle === 'Sign in' ? (
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/login/signup' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='/login/signin' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
        <Copyright mt={5} />
      </Container>
    </ThemeProvider>
  );
}

export default SubmitForm;
