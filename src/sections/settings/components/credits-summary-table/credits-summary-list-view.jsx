import { useState } from 'react';

import {
  Box,
  Card,
  Table,
  Button,
  TableRow,
  useTheme,
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
  { id: 'status/Date', label: 'Status/Date', width: 3500 },
  { id: 'actor', label: 'Verification Summary', width: 3000 },
  { id: 'credits', label: 'Credits', width: 250 , align:'right'},
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

// Use MUI theme palette for dynamic color assignment
const getStatusStyles = (action, theme) => {
  if (action === 'Email Credits Purchased') {
    return {
      bg: theme.palette.success.lighter,
      color: theme.palette.success.dark,
    };
  }
  if (action === 'Single Verification') {
    return {
      bg: theme.palette.error.lighter,
      color: theme.palette.error.dark,
    };
  }
  if (action === 'Bulk Verification') {
    return {
      bg: theme.palette.error.lighter,
      color: theme.palette.error.dark,
    };
  }
  return {
    bg: theme.palette.grey[200],
    color: theme.palette.text.primary,
  };
};

export default function CreditSummaryListView() {
  const theme = useTheme();
  const filterDialog = useBoolean();
  const [tableData] = useState(initialTableData);

  return (
    <Card>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h5" marginBottom={1}>
          Email Verification Logs
        </Typography>
        <Typography variant="body2" color="textSecondary">
          View all email verification activities, including type, date, summary, and credit usage.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, width: '100%' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by email, email list name and folder name..."
          fullWidth
          InputProps={{ sx: { height: 54 } }}
        />
        <Button
          variant="text"
          onClick={filterDialog.onTrue}
          sx={{ color: theme.palette.primary.main, fontWeight: 'bold', pt: 1.5, pb: 1.5 }}
          startIcon={<Iconify icon="mdi:filter" />}
        >
          Filters
        </Button>
      </Box>

      <Scrollbar>
        <Table sx={{ minWidth: 960 }}>
          <TableHeadCustom headLabel={TABLE_HEAD} />
          <TableBody>
            {tableData.map((row) => {
              const statusStyle = getStatusStyles(row.action, theme);

              return (
                <TableRow key={row.id}  
                hover
                sx={{
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    backgroundColor: "",
                  },
                }}>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'inline-block',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: 12,
                        mb: 0.5,
                        color: statusStyle.color,
                        backgroundColor: statusStyle.bg,
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
                    <span style={{ color: theme.palette.text.secondary }}>{row.section}</span>
                  </TableCell>
                  <TableCell align="right">{row.credits}</TableCell>
                </TableRow>
              );
            })}
            <TableNoData notFound={!tableData.length} />
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
}

