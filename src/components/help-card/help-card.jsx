import Box from '@mui/material/Box';
import { Card } from '@mui/material';
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
        <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
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

      <Card borderRadius={2}>
        {img && (
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: 1 },
              cursor: 'pointer',
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src={img}
              alt="Thumbnail"
              sx={{
                width: '500px',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
              }}
            />
          </Box>
        )}
      </Card>
    </Box>
  );
}
