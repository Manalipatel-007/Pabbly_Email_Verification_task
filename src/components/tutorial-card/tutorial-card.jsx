import { Icon } from '@iconify/react'; // Ensure correct import for Iconify
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function TutorialCard({ description, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 310,
        p: 1,
        gap: 1,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        color: 'common.black',
        backgroundColor: 'common.white',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
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
              width: '100%',
              height: 'auto',
              cursor: 'pointer',
              objectFit: 'contain',
              p: 0,
              borderRadius: 1,
              boxShadow: theme.shadows[1],
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

      <Typography
        variant="h4"
        sx={{
          color: 'text.primary',
          mt: 2,
          textAlign: 'left',
          fontSize: '14px !important',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
