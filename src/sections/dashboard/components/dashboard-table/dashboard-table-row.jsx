import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';

import { popover } from 'src/theme/core/components/popover';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// Define status colors
const statusColors = {
  Uploading: 'warning',
  Unverified: 'error',
  Processing: 'info',
  Verified: 'success',
};

export function DashboardTableRow({ row, selected, onSelectRow, onDeleteRow }) {
  return (
    <TableRow hover selected={selected} aria-checked={selected} tabIndex={-1}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell>
        <Stack spacing={1}>
          <Label variant="soft" color={statusColors[row.status] || 'default'}>
            {row.status}
          </Label>
          <Box sx={{ fontWeight: 'bold' }}>{row.name}</Box>
          <Box sx={{ color: 'text.disabled', fontSize: 12 }}>{row.date}</Box>
        </Stack>
      </TableCell>


      <TableCell>
        <Stack spacing={2} direction="row" alignItems="center">
          {/* <Avatar alt={row.name} src={row.avatarUrl} /> */}

          <Stack sx={{ typography: 'body2', flex: '1 1 auto', alignItems: 'flex-start' }}>
            {row.emails} Emails
            {row.credits && (
              <Box sx={{ color: 'success.main', fontSize: 12 }}>{row.credits} Credit Consumed</Box>
            )}
          </Stack>
        </Stack>
      </TableCell>

      <TableCell>
        <Stack direction="row" alignItems="center" gap={3}>
          <Button variant="outlined" color="primary" size="medium">
            {row.action}
          </Button>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
