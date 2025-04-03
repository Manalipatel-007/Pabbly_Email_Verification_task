import { Box, Grid } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { listItems } from 'src/_mock/_dashboardBigCardListItem';

import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
import SettingsTabs from 'src/components/settings-tabs/settings-tabs';

import thumbnailImage from '../../../public/assets/images/big-card-thumbnails/email-verication-video-thumbnail.png';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };
const { items, style } = listItems;

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="API"
        description="Generate your API Key and Secret Key to perform email verifications directly through the Pabbly Email Verification API."
        showButton={false}
      />

      <Box sx={{ mt: 2 }}>
        <SettingsTabs />
      </Box>
      
      <Box sx={{ mt: 3 }}>
        <Grid xs={12} md={8}>
          <BigCard title="Points To Remember" style={style} items={items} img={thumbnailImage} />
        </Grid>
      </Box>
    </DashboardContent>
  );
}
