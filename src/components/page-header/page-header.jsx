import { Box, Button, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import { LearnMoreTypography } from '../learn-more/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box>
          <Box>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
            </Box>
            <Box>
              <LearnMoreTypography />
            </Box>
          </Box>
        </Box>

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
