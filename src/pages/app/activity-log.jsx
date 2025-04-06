import { Box, Grid } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { listItems } from 'src/_mock/_activity-log';
import { DashboardContent } from 'src/layouts/dashboard';

import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';

import { SettingsTabs } from 'src/sections/settings/components/settings-tabs';
import { ActivityLogListView } from 'src/sections/settings/components/activity-log-table/activity-log-list-view';

import thumbnailImage from '../../../public/assets/images/big-card-thumbnails/activity-log.png';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };
const { items, style } = listItems;

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <Box>
        <PageHeader
          title="Activity Log"
          description="Keep track of all actions in your Pabbly Email Verification account, like verifying single emails,
             uploading and verifying email lists, downloading reports, deleting email lists, adding team members, and regenerating API keys. Activity Log helps you monitor changes and ensure everything runs smoothly. "
          showButton={false}
        />
      </Box>

      <Box sx={{ mt: 3 }}>
        <SettingsTabs />
      </Box>

      <Box sx={{ mt: 3 }}>
        <Grid xs={12} md={8}>
          <BigCard title="Points To Remember" style={style} items={items} img={thumbnailImage} />
        </Grid>
      </Box>

      <Box sx={{ mt: 3 }}>
        <ActivityLogListView />
      </Box>
    </DashboardContent>
  );
}
