import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'; // Import Iconify Icon

import { LearnMoreTypography } from '../learn-more/learn-more';

export default function BigCard({ title, description, items, style, action, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 5,
        gap: 1,
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
        <Box component="ul" sx={style} mb={1} p={1}>
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
              borderRadius: 1,
              boxShadow: theme.shadows[3],
            }}
          />

          <Box
            component="button"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'transparent',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              '&:focus': { outline: 'none' }, 
            }}
          >
            <Icon
              icon="icon-park-solid:play"
              style={{
                fontSize: '48px',
                borderRadius: '50%',
                color: theme.palette.primary.main,
                animation: 'pulse 1.5s infinite',
              }}
            />
            <style>
              {`
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(7, 141, 238, 0.3);
          transform: scale(1);
        }
        50% {
          box-shadow: 0 0 0 10px rgba(7, 141, 238, 0.1);
          transform: scale(1.0565);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(7, 141, 238, 0);
          transform: scale(1);
        }
      }
    `}
            </style>
          </Box>
        </Box>
      )}
    </Box>
  );
}
