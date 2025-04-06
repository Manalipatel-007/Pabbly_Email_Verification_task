import { useState } from 'react';
import { Icon } from '@iconify/react'; // Import Iconify

import {
  Box,
  Card,
  Table,
  Button,
  Select,
  Dialog,
  MenuItem,
  TableBody,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { Scrollbar } from 'src/components/scrollbar';
import { TableNoData, TableHeadCustom } from 'src/components/table';

import { ActivityLogTableRow } from './activity-log-table-row';

const TABLE_HEAD = [
  { id: 'Action/Date', label: 'Action/Date', width: 295 },
  { id: 'Actor', label: 'Actor', width: 365 },
  { id: 'Section/Source', label: 'Section/Source', width: 250 },
  { id: 'Activity Data', label: 'Activity Data', width: 383, align: 'right' }, // Align Activity Data column to the right
];

const initialTableData = [
  {
    id: 1,
    action: 'Created',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Hardik Pradhan',
    section: 'Dashboard',
    source: 'USER',
    activityData: '67764b1fb9e6371d99c28a37',
  },
  {
    id: 2,
    action: 'Deleted',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Ankit Mandli',
    section: 'Dashboard',
    source: 'USER',
    activityData: '67764b1fb9e6371d99c28a37',
  },
  {
    id: 3,
    action: 'Created',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Nikhil Patel',
    section: 'Dashboard',
    source: 'API',
    activityData: '67764b1fb9e6371d99c28a37',
  },
  {
    id: 4,
    action: 'Updated',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Ankit Mandli',
    section: 'Team Member',
    source: 'USER',
    activityData: '67764b1fb9e6371d99c28a37',
  },
  {
    id: 5,
    action: 'Updated',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Rahul Sharma',
    section: 'Settings',
    source: 'API',
    activityData: '67764b1fb9e6371d99c28a37',
  },
];

export function ActivityLogListView() {
  const filterDialog = useBoolean();
  const [tableData] = useState(initialTableData);
  const filters = useSetState({ action: '', actor: '', section: '', dateRange: '' });

  const dataFiltered = tableData
    .filter(
      (row) =>
        (!filters.state.action || row.action === filters.state.action) &&
        (!filters.state.actor || row.actor === filters.state.actor) &&
        (!filters.state.section || row.section === filters.state.section)
    )
    .slice(0, 5);

  return (
    <>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            p: 2,
          }}
        >
          <Box>
            <Typography variant="h5">Activity Log</Typography>
            <Typography variant="body2" color="textSecondary">
              Track all activities in your Pabbly Email Verification, including user actions and API
              requests. Monitor created, updated, and deleted actions to ensure transparency and
              security.
            </Typography>
          </Box>
          <Button
            variant="text"
            onClick={filterDialog.onTrue}
            sx={{ color: 'blue', fontWeight: 'bold', p: 2, mr: 2 }}
            startIcon={<Icon icon="mdi:filter" />}
          >
            Filters
          </Button>
        </Box>
        <Scrollbar>
          <Table sx={{ minWidth: 960 }}>
            <TableHeadCustom
              headLabel={TABLE_HEAD}
              sx={{
                '& th:last-child': { pr: 3, textAlign: 'right' }, // Add padding-right and align text to the right for the last header cell
              }}
            />
            <TableBody>
              {dataFiltered.map((row) => (
                <ActivityLogTableRow
                  key={row.id}
                  row={row}
                  sx={{
                    textAlign: 'right',
                    pr: 3,
                  }}
                />
              ))}
              <TableNoData notFound={!dataFiltered.length} />
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>

      <Dialog open={filterDialog.value} onClose={filterDialog.onFalse} maxWidth="md" fullWidth>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
            <TextField label="Date Range" placeholder="Between" fullWidth disabled />
            <TextField type="date" label="Start Date" fullWidth />
            <TextField type="date" label="End Date" fullWidth />
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.state.action}
                onChange={(e) => filters.setState({ action: e.target.value })}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Created">Created</MenuItem>
                <MenuItem value="Deleted">Deleted</MenuItem>
                <MenuItem value="Updated">Updated</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Actor Email" fullWidth />
            <FormControl fullWidth>
              <InputLabel>Source</InputLabel>
              <Select>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="USER">USER</MenuItem>
                <MenuItem value="API">API</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Activity Data" fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={filterDialog.onFalse}>Cancel</Button>
          <Button variant="contained" disabled>
            Apply Filter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
