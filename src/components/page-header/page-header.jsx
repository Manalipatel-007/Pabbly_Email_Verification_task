import { useState } from 'react';

import { Box, Menu, Button, MenuItem, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import { LearnMoreTypography } from '../learn-more/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {description} <LearnMoreTypography />
        </Typography>
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
            onClick={handleClick}
          >
            {buttonTitle}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              elevation: 3,
              sx: {
                mt: 1,
                borderRadius: 2,
                minWidth: 180,
                py: 1,
              },
            }}
          >
            <MenuItem onClick={handleClose}>Verify Single Email</MenuItem>
            <MenuItem onClick={handleClose}>Verify Bulk Emails</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
}
