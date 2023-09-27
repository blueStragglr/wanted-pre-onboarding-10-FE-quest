import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Container, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import BasicCard from '@/components/common/Card';
import Link from 'next/link';

const defaultTheme = createTheme();

function Main() {
  const [resultData, setResultData] = useState<any>([{}]);

  useEffect(() => {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
      .then(response => response.json())
      .then(response => setResultData(response));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography
        component='h1'
        variant='h5'
        sx={{
          m: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        Result Page
        <Link href='/login/signin' style={{ color: 'blue', textDecoration: 'underline', marginTop: '8px' }}>
          logout
        </Link>
      </Typography>
      <Container component='main' maxWidth='md'>
        <Grid container spacing={5}>
          {resultData.map((item: any) => (
            <Grid item xs={4} key={uuidv4()}>
              <BasicCard title={item.id} content={item.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Main;
