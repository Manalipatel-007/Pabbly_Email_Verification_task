import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'; 

import { LearnMoreTypography } from '../learn-more/learn-more';

export default function HelpCard({ title, description, items, style, action, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 5,
        gap: 4,
        borderRadius: 2,
        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        pl: { xs: 3, md: 5 },
        alignItems: 'center',
        color: 'common.black',
        backgroundColor: 'common.white',
        textAlign: { xs: 'center', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
          {description}
        </Typography>
        <Box component="ul" sx={style} mb={2} p={1}>
          {items.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" fontWeight={400} color="#637381">
                {item}
                {index === items.length - 1 && <LearnMoreTypography />}{' '}
              </Typography>
            </li>
          ))}
        </Box>

        {action && action}
      </Box>

      {img && (
        <Box
          sx={{
            p: 1, 
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <Box
            component="img"
            src={img}
            alt="Thumbnail"
            sx={{
              height: 227,
              width: 500,
              cursor: 'pointer',
              objectFit: 'contain',
              p: 0,
              borderRadius: 1.5,
              
            }}
          />
        </Box>
      )}
    </Box>
  );
}
