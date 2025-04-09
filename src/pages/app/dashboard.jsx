import { useState } from 'react';

import { Box, Grid, Menu, Button, MenuItem } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { listItems } from 'src/_mock/_dashboardBigCardListItem';

import { Iconify } from 'src/components/iconify';
import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-casrds';

import FolderList from 'src/sections/dashboard/components/dashboard-folder';
import DashboardListView from 'src/sections/dashboard/components/dashboard-table/dashboard-list-view';

import thumbnailImage from '../../../public/assets/images/big-card-thumbnails/email-verication-video-thumbnail.png';

// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };
const { items, style } = listItems;

// Dropdown menu component
const VerifyEmailMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={
          <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
        }
        endIcon={<Iconify icon="formkit:down" style={{ width: 18, height: 18 }} />}
        variant="outlined"
        color="primary"
        size="large"
        sx={{ textTransform: 'none', fontWeight: 600 }}
      >
        Verify Email
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 4,
          sx: {
            mt: 1,
            borderRadius: 2,
            minWidth: 200,
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Verify Single Email</MenuItem>
        <MenuItem onClick={handleClose}>Verify Bulk Emails</MenuItem>
      </Menu>
    </>
  );
};

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        tooltipText="Click to verify single or bulk email addresses."
        buttonTitle="Verify Email"
      />

      <Box
        sx={{
          gap: 3,
          mt: 5,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        <StatsCards
          statsCardstitle="Email Credits Consumed"
          cardStats={32}
          icon_name="consumed-icon.svg"
          icon_color="#10CBF3"
          bg_gradient="#10CBF3"
          tooltipText="Number of emails credits consumed by your account."
        />

        <StatsCards
          statsCardstitle="Email Credits Remaining"
          cardStats={9968}
          icon_name="remaining-icon.svg"
          icon_color="#1D88FA"
          bg_gradient="#1D88FA"
          tooltipText="Number of emails credits remaining by your account."
        />

        <StatsCards
          statsCardstitle="cardStats Number of Email Lists"
          cardStats={100}
          icon_name="lists-icon.svg"
          icon_color="#28A645"
          bg_gradient="#28A645"
          tooltipText="Number of emails list uploaded by your account."
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 3,
          mt: 3,
        }}
      >
        <Box>
          <FolderList />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Grid xs={12} md={8}>
            <BigCard
              title="Verification Guidelines"
              description="Please adhere to the following guidelines when uploading your CSV file:"
              style={style}
              items={items}
              action={<VerifyEmailMenu />} 
              img={thumbnailImage}
            />
          </Grid>

          <Box sx={{ mt: 3 }}>
            <DashboardListView />
          </Box>
        </Box>
      </Box>
    </DashboardContent>
  );
}
