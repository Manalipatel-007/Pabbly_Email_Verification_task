import { useState } from 'react';

import {
  Box,
  Card,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TextField,
  Typography,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { TableNoData, TableHeadCustom } from 'src/components/table';

const TABLE_HEAD = [
  { id: 'status/Date', label: 'Status/Date', width: 295 },
  { id: 'actor', label: 'Verification Summary', width: 365 },
  { id: 'credits', label: 'Credits', width: 250 },
];

const initialTableData = [
  {
    id: 1,
    action: 'Bulk Verification',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'List 1',
    section: 'Pabbly Connect',
    credits: -9,
  },
  {
    id: 2,
    action: 'Bulk Verification',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'List 2',
    section: 'Pabbly Hook',
    credits: -7,
  },
  {
    id: 3,
    action: 'Single Verification',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'ankit.mandli@pabbly.com',
    section: 'Email address',
    credits: -1,
  },
  {
    id: 4,
    action: 'Email Credits Purchased',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Email Credits Allotted',
    section: '',
    credits: 100,
  },
];

export default function CreditSummaryListView() {
  const filterDialog = useBoolean();
  const [tableData] = useState(initialTableData);

  return (
    <Card>
      <Box sx={{ mb: 2, p: 2 }}>
        <Box>
          <Typography variant="h5">Email Verification Logs</Typography>
          <Typography variant="body2" color="textSecondary">
            View all email verification activities, including type, date, summary, and credit usage.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, p: 2, width: '100%' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by email, email list name and folder name..."
          fullWidth
          InputProps={{
            sx: { height: 54 }, // Increase the height of the search bar
          }}
        />
        <Button
          variant="text"
          onClick={filterDialog.onTrue}
          sx={{ color: 'blue', fontWeight: 'bold', pt: 1.5, pb: 1.5 }}
          startIcon={<Iconify icon="mdi:filter" />}
          color=""
        >
          Filters
        </Button>
      </Box>

      <Scrollbar>
        <Table sx={{ minWidth: 960 }}>
          <TableHeadCustom headLabel={TABLE_HEAD} />
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: '#f0f0f0',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {row.action}
                  </Box>
                  <br />
                  {row.date}
                </TableCell>
                <TableCell>
                  {row.actor}
                  <br />
                  <span style={{ color: 'gray' }}>{row.section}</span>
                </TableCell>
                <TableCell>{row.credits}</TableCell>
              </TableRow>
            ))}
            <TableNoData notFound={!tableData.length} />
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
}
