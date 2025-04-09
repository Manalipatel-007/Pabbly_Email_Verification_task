import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

export default function HelpCard({ title, description, items, style, action, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 5,
        gap: 2,
        borderRadius: 2,
        display: 'flex',
        height: { lg: 1 },
        position: 'relative',
        pl: { xs: 3, lg: 5 },
        alignItems: 'flex-start',
        color: 'common.black',
        backgroundColor: 'common.white',
        textAlign: 'left',
        flexDirection: { xs: 'column', lg: 'row' }, // <- switch to row on laptop+
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: 'flex-start', // <- always left-align content
        }}
      >
        <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>


        <Box component="ul" sx={style} mb={2} p={1}>
          {items.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" fontWeight={400} color="#637381">
                {item}
                {index === items.length - 1 && <LearnMoreTypography />}
              </Typography>
            </li>
          ))}
        </Box>

        {action && action}
      </Box>

      {img && (
        <Card
          sx={{
            boxShadow: 'none',
            background: 'transparent',
            mt: { xs: 2, lg: 0 },
            alignSelf: { xs: 'flex-start', lg: 'center' }, 
          }}
        >
          <Box
            component="img"
            src={img}
            alt="Thumbnail"
            sx={{
              width: { xs: '100%', sm: '350px', lg: '400px' },
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Card>
      )}
    </Box>
  );
}
