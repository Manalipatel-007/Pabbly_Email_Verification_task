import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

import TimeZoneSelector from './timeZoneSelector';

// ----------------------------------------------------------------------

const metadata = { title: `Page three | Dashboard - ${CONFIG.site.name}` };

export function TimeZone() {
  return (
    <Box>
      {/* <Box>
        <TimeZoneSelector />
      </Box> */}
    </Box>
  );
}
