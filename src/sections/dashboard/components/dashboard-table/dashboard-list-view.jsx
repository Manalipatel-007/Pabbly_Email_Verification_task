import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Stack,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Iconify } from 'src/components/iconify';

// Styled label component for statuses
const StatusLabel = styled(Box)(({ theme, color }) => ({
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: theme.palette[color]?.lighter || '#eee',
  color: theme.palette[color]?.darker || '#000',
}));

// Data
const rows = [
  {
    id: 1,
    status: 'Uploading',
    name: 'List 1',
    date: 'Oct 23, 2024 17:45:32',
    emails: 128,
    action: 'Uploading',
    statusColor: 'warning',
  },
  {
    id: 2,
    status: 'Unverified',
    name: 'List 2',
    date: 'Oct 23, 2024 17:45:32',
    emails: 65,
    action: 'Start Verification',
    statusColor: 'error',
  },
  {
    id: 3,
    status: 'Unverified',
    name: 'List 3',
    date: 'Oct 23, 2024 17:45:32',
    emails: 250,
    action: 'Start Verification',
    statusColor: 'error',
  },
  {
    id: 4,
    status: 'Processing',
    name: 'List 4',
    date: 'Oct 23, 2024 17:45:32',
    emails: 100,
    action: 'Start Verification',
    statusColor: 'info',
  },
];

export default function DashboardTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
      <Table>
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '40px', padding: '10px' }}>
              <Checkbox />
            </TableCell>
            <TableCell sx={{ width: '250px', fontWeight: 'bold' }}>Status/Name/Date</TableCell>
            <TableCell sx={{ width: '250px', fontWeight: 'bold' }}>Number of Emails/Credits Consumed</TableCell>
            <TableCell sx={{ textAlign: 'right', fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              {/* Checkbox */}
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>

              {/* Status, Name, Date */}
              <TableCell>
                <Stack spacing={0.3}>
                  <StatusLabel color={row.statusColor}>{row.status}</StatusLabel>
                  <Box sx={{ fontWeight: 'bold' }}>{row.name}</Box>
                  <Box sx={{ fontSize: 12, color: 'text.secondary' }}>{row.date}</Box>
                </Stack>
              </TableCell>

              {/* Emails Count */}
              <TableCell>
                <Box>Contains {row.emails} Emails</Box>
              </TableCell>

              {/* Action Button */}
              <TableCell align="right">
                <Stack direction="row" justifyContent="flex-end" spacing={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    color={row.action === 'Uploading' ? 'primary' : 'info'}
                  >
                    {row.action}
                  </Button>
                  <IconButton>
                    <Iconify icon="eva:more-vertical-fill" />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
