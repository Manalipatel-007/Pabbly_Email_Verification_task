import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';

import { SettingsTabs } from 'src/sections/settings/components/settings-tabs';
import TimeZoneSelector from 'src/sections/settings/components/timeZoneSelector';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Time Zone"
        description="Manage your account time zone settings."
        showButton={false}
      />

      <Box sx={{ mt: 2 }}>
        <SettingsTabs />
      </Box>
      <Box>
        <TimeZoneSelector />
      </Box>
    </DashboardContent>
  );
}
