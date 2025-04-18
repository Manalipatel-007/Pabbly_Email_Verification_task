import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import { svgColorClasses } from './classes';

// ----------------------------------------------------------------------

export const SvgColor = forwardRef(({ src, className, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component="span"
    className={svgColorClasses.root.concat(className ? ` ${className}` : '')}
    sx={{
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'inline-flex',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

