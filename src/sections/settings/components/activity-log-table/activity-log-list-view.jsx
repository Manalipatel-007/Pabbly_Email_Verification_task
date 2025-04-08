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
  Typography,
  TablePagination,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { TableNoData, TableHeadCustom } from 'src/components/table';

const TABLE_HEAD = [
  { id: 'actionDate', label: 'Action/Date', width: 400 },
  { id: 'actor', label: 'Actor', width: 450 },
  { id: 'section', label: 'Section/Source', width: 550 },
  { id: 'data', label: 'Activity Data', width: 300, align: 'right' },
];

const initialTableData = [
  {
    id: 1,
    status: 'Created',
    date: 'Oct 23, 2024 17:45:32',
    name: 'Hardik Pradhan',
    email: 'hardik.pradhan@pabbly.com',
    section: 'Dashboard',
    source: 'USER',
    data: '67764b1fb9e637ld99c28a37',
  },
  {
    id: 2,
    status: 'Deleted',
    date: 'Oct 23, 2024 17:45:32',
    name: 'Ankit Mandli',
    email: 'ankit.mandli@pabbly.com',
    section: 'Dashboard',
    source: 'USER',
    data: '67764b1fb9e637ld99c28a37',
  },
  {
    id: 3,
    status: 'Created',
    date: 'Oct 23, 2024 17:45:32',
    name: 'Nikhil Patel',
    email: 'nikhil.patel@pabbly.com',
    section: 'Dashboard',
    source: 'API',
    data: '67764b1fb9e637ld99c28a37',
  },
  {
    id: 4,
    status: 'Updated',
    date: 'Oct 23, 2024 17:45:32',
    name: 'Ankit Mandli',
    email: 'ankit.mandli@pabbly.com',
    section: 'Team Member',
    source: 'USER',
    data: '67764b1fb9e637ld99c28a37',
  },
  {
    id: 5,
    status: 'Updated',
    date: 'Oct 23, 2024 17:45:32',
    name: 'Ankit Mandli',
    email: 'ankit.mandli@pabbly.com',
    section: 'API',
    source: 'USER',
    data: '67764b1fb9e637ld99c28a37',
  },
];

const getStatusStyles = (status, theme) => {
  switch (status) {
    case 'Created':
      return { bg: theme.palette.success.lighter, color: theme.palette.success.darker };
    case 'Deleted':
      return { bg: theme.palette.error.lighter, color: theme.palette.error.darker };
    case 'Updated':
      return { bg: theme.palette.warning.lighter, color: theme.palette.warning.darker };
    default:
      return { bg: theme.palette.grey[300], color: theme.palette.text.primary };
  }
};

export function ActivityLogListView() {
  const theme = useTheme();
  const filterDialog = useBoolean();
  const [tableData] = useState(initialTableData);

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Card>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Box>
          <Typography sx={{ mb: 1 }} variant="h6">
            Activity Log
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Track all activities in your Pabbly Email Verification, including user actions and API
            requests. Monitor created, updated, and deleted actions to ensure transparency and
            security.
          </Typography>
        </Box>
        <Button
          variant="text"
          onClick={filterDialog.onTrue}
          sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
          startIcon={<Iconify icon="mdi:filter" />}
        >
          Filters
        </Button>
      </Box>

      <Scrollbar>
        <Table sx={{ minWidth: 960 }}>
          <TableHeadCustom headLabel={TABLE_HEAD} />

          <TableBody>
            {paginatedData.map((row) => {
              const statusStyle = getStatusStyles(row.status, theme);

              return (
                <TableRow
                  key={row.id}
                  hover
                  sx={{
                    transition: 'background-color 0.2s',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  {/* Action/Date */}
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.color,
                        fontWeight: 600,
                        fontSize: 12,
                        display: 'inline-block',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        mb: 0.5,
                      }}
                    >
                      {row.status}
                    </Box>
                    <Typography variant="body2">{row.date}</Typography>
                  </TableCell>

                  {/* Actor */}
                  <TableCell>
                    <Typography variant="body2" fontWeight="500">
                      {row.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.email}
                    </Typography>
                  </TableCell>

                  {/* Section/Source */}
                  <TableCell>
                    <Typography variant="body2" fontWeight="500">
                      {row.section}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {row.source}
                    </Typography>
                  </TableCell>

                  {/* Activity Data */}
                  <TableCell>
                    <Typography
                      variant="body2"
                      color="primary"
                      align="right"
                      sx={{ cursor: 'pointer', wordBreak: 'break-all' }}
                    >
                      {row.data}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}

            <TableNoData notFound={!paginatedData.length} />
          </TableBody>
        </Table>
      </Scrollbar>

      <TablePagination
        component="div"
        count={tableData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[4, 5, 10, 25]}
      />
    </Card>
  );
}
