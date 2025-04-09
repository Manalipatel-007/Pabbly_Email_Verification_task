import { Typography } from '@mui/material';

export function LearnMoreTypography({ children, ...props }) {
  return (
    <Typography
      component="span"
      {...props}
      sx={{
        color: '#078dee',
        fontSize: '14px',
        fontWeight: 400,
        textDecoration: 'underline',
        cursor: 'pointer',
        ...props.sx,
        ml: '5px',
      }}
    >
      Learn more
    </Typography>
  );
}
