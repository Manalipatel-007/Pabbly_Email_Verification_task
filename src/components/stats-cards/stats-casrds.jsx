import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function StatsCards({
  sx,
  icon,
  statsCardstitle,
  cardStats,
  icon_name,
  icon_color,
  bg_gradient,
  color = 'warning',
  ...other
}) {
  const theme = useTheme();

  return (
    <Card sx={{ py: 3, pl: 3, pr: 2.5, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'h3' }}>{cardStats}</Box>
        <Typography noWrap variant="subtitle2" component="div" sx={{ color: 'text.secondary' }}>
          {statsCardstitle}
        </Typography>
      </Box>

      <SvgColor
        src={`${CONFIG.site.basePath}/assets/icons/stats-cards/${icon_name}`}
        sx={{
          top: 24,
          right: 20,
          width: 36,
          height: 36,
          position: 'absolute',
          background: icon_color,
        }}
      />

      <Box
        sx={{
          top: -44,
          width: 160,
          zIndex: -1,
          height: 160,
          right: -104,
          opacity: 0.12,
          borderRadius: 3,
          position: 'absolute',
          transform: 'rotate(40deg)',
          background: `linear-gradient(120deg,${bg_gradient} 0%, #FFFFFF 100%)`,
        }}
      />
    </Card>
  );
}
