// import { Box, Grid, Button } from '@mui/material';

import { Box, Grid, Button } from "@mui/material";

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { listItems } from "src/_mock/_team-memberListItem";

import { Iconify } from 'src/components/iconify';
import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-casrds';

import { SettingsTabs } from 'src/sections/settings/components/settings-tabs';
import { TeamMembersListView } from 'src/sections/settings/components/team-members-table/team-members-list-view';
import { TeamMembersListView2 } from 'src/sections/settings/components/team-members-table-2/team-members-list-view2';

import thumbnailImage from '../../../public/assets/images/big-card-thumbnails/pev_team_member.png';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };
const { items, style } = listItems;

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">

      <PageHeader
        title="Team Members"
        description="Add team members and share folder(s) access with them from here."
        showButton={false}
      />
      <Box sx={{mt : 3}}>
        <SettingsTabs />
      </Box>

      <Box
        sx={{
          gap: 3,
          // mt: 4,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        <StatsCards
          statsCardstitle="Unique Team Members Added"
          cardStats={20}
          icon_name="unique.png"
          icon_color="#10CBF3"
          bg_gradient="#10CBF3"
          tooltipText="Team Members Added By You."
        />

        <StatsCards
          statsCardstitle="Folders Shared by You"
          cardStats={10}
          icon_name="byyou.png"
          icon_color="#1D88FA"
          bg_gradient="#1D88FA"
          tooltipText="Folder(s) Shared by You."
        />

        <StatsCards
          statsCardstitle="Folders Shared With You"
          cardStats={1000}
          icon_name="sharedwithyou.png"
          icon_color="#28A645"
          bg_gradient="#28A645"
          tooltipText="Folder(s) Shared With You."
        />
      </Box>

      <Box sx={{ mt: 3 }}>
        <Grid xs={12} md={8}>
          <BigCard
            title="Points To Remember!"
            // description="Please adhere to the following guidelines when uploading your CSV file:"
            style={style}
            items={items}
            action={
              <Button
                startIcon={
                  <Iconify
                    icon="heroicons:plus-circle-16-solid"
                    style={{ width: 18, height: 18 }}
                  />
                }
                endIcon={<Iconify icon="formkit:down" style={{ width: 18, height: 18 }} />}
                variant="outlined"
                color="primary"
                size="large"
              >
                Verify Email
              </Button>
            }
            img={thumbnailImage}
          />
        </Grid>
      </Box>

      <Box sx={{ mt: 3 }}>
        <TeamMembersListView />
      </Box>

      <Box sx={{ mt: 3 }}>
        <TeamMembersListView2 />
      </Box>
    </DashboardContent>

  );
}
