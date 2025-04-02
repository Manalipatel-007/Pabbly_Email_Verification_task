import React from 'react';

import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

import { FooterSection } from './footer-section';

// ----------------------------------------------------------------------

export function FooterBase({ sx }) {
  const theme = useTheme();
  return (
    <FooterSection
      sx={{
        backgroundColor: 'common.white',
        borderBottom: '1px dashed',
        height: '40px',
        borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.3),
        ...sx,
      }}
    />
  );
}
