import { Typography } from '@mui/material';

export function LearnMoreTypography({ children, ...props }) {
  return (
    <Typography
      component="span"
      {...props}
      sx={{
        color: '#078dee',
        fontSize: '16px',
        fontWeight: 400,
        textDecoration: 'underline',
        cursor: 'pointer',
        ...props.sx,
      }}
    >
      Learn more
    </Typography>
  );
}
