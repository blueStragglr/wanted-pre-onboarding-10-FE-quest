import { Typography } from '@mui/material';
import Link from 'next/link';

type CopyrightProps = {
  [key: string]: number;
};

function Copyright({ mt, mb }: CopyrightProps) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' mt={mt} mb={mb}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        HayeongShin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
