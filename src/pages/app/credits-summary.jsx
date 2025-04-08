import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-casrds';

import { SettingsTabs } from 'src/sections/settings/components/settings-tabs';
import CreditSummaryListView from 'src/sections/settings/components/credits-summary-table/credits-summary-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Credits Summary"
        description="View a summary of your email verification credits. "
        showButton={false}
      />

      <Box sx={{ mt: 3 }}>
        <SettingsTabs/>
      </Box>
      <Box
        sx={{
          gap: 3,
          // mt: 1,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        <StatsCards
          statsCardstitle="Email Credits Consumed"
          cardStats={32}
          icon_name="consumed-icon.svg"
          icon_color="#10CBF3"
          bg_gradient="#10CBF3"
        />

        <StatsCards
          statsCardstitle="Email Credits Remaining"
          cardStats={9968}
          icon_name="remaining-icon.svg"
          icon_color="#1D88FA"
          bg_gradient="#1D88FA"
        />

        <StatsCards
          statsCardstitle="cardStats Number of Email Lists"
          cardStats={100}
          icon_name="lists-icon.svg"
          icon_color="#28A645"
          bg_gradient="#28A645"
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <CreditSummaryListView/>
      </Box>
    </DashboardContent>
   

  );
}
