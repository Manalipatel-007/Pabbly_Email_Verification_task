import { TableRow, TableCell } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import { Label } from 'src/components/label';

// Function to get color for labels
const getLabelColor = (action) => {
  switch (action) {
    case 'Created':
      return 'success';
    case 'Deleted':
      return 'error';
    case 'Updated':
      return 'warning';
    default:
      return 'default';
  }
};

// Activity Log Table Row Component
export function ActivityLogTableRow({ row, sx }) {
  return (
    <TableRow hover>
      <TableCell>
        <Label color={getLabelColor(row.action)}>{row.action}</Label>
        <br />
        {row.date}
      </TableCell>

      <TableCell>
        <strong>{row.actor}</strong>
        <br />
        <span style={{ color: 'gray' }}>{row.email}</span>
      </TableCell>

      <TableCell>
        {row.section}
        <br />
        <span style={{ color: 'gray', fontSize: '0.85em' }}>{row.source}</span>
      </TableCell>

      <TableCell sx={{ textAlign: 'right', ...sx }}>
        <RouterLink href={`#${row.activityData}`} color="primary">
          {row.activityData}
        </RouterLink>
      </TableCell>
    </TableRow>
  );
}
