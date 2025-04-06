import { Box, Button, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import { LearnMoreTypography } from '../learn-more/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: 2,
        mt: 4,
      }}
    >
      {/* Left section with title and description */}
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          <LearnMoreTypography />
        </Box>
      </Box>

      {/* Button section */}
      {showButton && (
        <Box>
          <Button
            variant="contained"
            size="large"
            color="primary"
            startIcon={
              <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
            }
            endIcon={<Iconify icon="formkit:down" style={{ width: 18, height: 18 }} />}
          >
            {buttonTitle}
          </Button>
        </Box>
      )}
    </Box>
  );
}
