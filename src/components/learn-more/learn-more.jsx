import { Typography } from '@mui/material';

export function LearnMoreTypography({ children, ...props }) {
  return (
    <Typography
      component="span"
      {...props}
      sx={{
        color: '#078dee',
        fontSize: '16px',
        fontWeight: 500,
        textDecoration: 'underline',
        cursor: 'pointer',
        ...props.sx,
      }}
    >
      Learn More
    </Typography>
  );
}
