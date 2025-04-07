import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

export default function BigCard({ title, description, items, style, action, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pr: 4,
        pl: 4,
        pt: 5,
        pb: 5,
        gap: 1,
        borderRadius: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: {
          xs: 'flex-start',
          md: 'flex-start', // tablet: top aligned
          lg: 'center', // laptop+: center vertically
        },
        color: 'common.black',
        backgroundColor: 'common.white',
        textAlign: 'left',
        width: '100%',
        ...sx,
      }}
      {...other}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Tooltip title="View file upload guidelines for email verification." placement="top" arrow>
          <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
            {title}
          </Typography>
        </Tooltip>

        <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
          {description}
        </Typography>

        <Box component="ul" sx={style} mb={1} p={1}>
          {items.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" fontWeight={400} color="#637381" p={0.1}>
                {item}
                {index === items.length - 1 && <LearnMoreTypography />}
              </Typography>
            </li>
          ))}
        </Box>

        {action && action}
      </Box>

      {/* Image Section */}
      {img && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'flex-start', // tablet: left aligned
              md: 'flex-start',
              lg: 'center', // laptop+: center horizontally if needed
            },
            alignItems: {
              xs: 'flex-start',
              md: 'flex-start',
              lg: 'center', // laptop+: center vertically
            },
            mt: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Tooltip title="Click to watch tutorial." placement="top" arrow>
              <Box
                component="img"
                src={img}
                alt="Tutorial Thumbnail"
                sx={{
                  width: '100%',
                  maxWidth: 420,
                  objectFit: 'cover',
                  borderRadius: 2,
                  display: 'block',
                }}
              />
            </Tooltip>

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
                  fontSize: '50px',
                  borderRadius: '50%',
                  color: theme.palette.primary.main,
                  animation: 'pulse 1.5s infinite',
                }}
              />
            </Box>

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
