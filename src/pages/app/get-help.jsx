import { Box, Grid, Button } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { listItems } from 'src/_mock/_getHelp';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import HelpCard from 'src/components/help-card/help-card';
import PageHeader from 'src/components/page-header/page-header';
import PageHeading from 'src/components/page-heading/page-heading';
import TutorialCard from 'src/components/tutorial-card/tutorial-card';

import getHelplImage from '../../../public/assets/images/big-card-thumbnails/get-help.png';
import thumbnailImage from '../../../public/assets/images/big-card-thumbnails/email-verication-video-thumbnail (3).png';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };
const { items, style } = listItems;

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Help & Tutorials"
        description="Tell us about your problem, and we’ll find you a solution."
        showButton="false"
      />

      <Box sx={{ mt: 3 }}>
        <Grid xs={12} md={8}>
          <HelpCard
            title="Verification Guidelines"
            description="Please adhere to the following guidelines when uploading your CSV file:"
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
                Ask Question
              </Button>
            }
            img={getHelplImage}
          />
        </Grid>
      </Box>

      <Box>
        <PageHeading title="Tutorials" />
      </Box>
      <Box >
        <TutorialCard
          description="Getting Started with Pabbly Email Verification"
          img={thumbnailImage}
      
          
        />
      </Box>
    </DashboardContent>
  );
}
