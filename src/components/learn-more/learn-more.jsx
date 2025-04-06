import { Typography } from '@mui/material';

export function LearnMoreTypography({ children, ...props }) {
  return (
    <Typography
      component="span"
      {...props}
      sx={{
        color: '#0078de',
        fontSize: '14px',
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
