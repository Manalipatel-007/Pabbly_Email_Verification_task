import { Box, Grid } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { listItems } from 'src/_mock/_apiListItem';
import { DashboardContent } from 'src/layouts/dashboard';

import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
import APIKeysCard from 'src/components/apiKeysCard/apiKeysCard';

import { SettingsTabs } from 'src/sections/settings/components/settings-tabs';

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
      
      <Box >
        <Grid xs={12} md={8}>
          <BigCard title="Points To Remember" style={style} items={items} img={thumbnailImage} />
        </Grid>
      </Box>

      <Box>
        <APIKeysCard/>
      </Box>
    </DashboardContent>
  );
}
