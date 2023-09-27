import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface BasicCardProps {
  title: string;
  subTitle?: string;
  content: string;
}

export default function BasicCard({ title, subTitle, content }: BasicCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {subTitle}
        </Typography>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2'>{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
