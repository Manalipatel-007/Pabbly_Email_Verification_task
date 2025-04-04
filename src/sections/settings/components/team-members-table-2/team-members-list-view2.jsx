import { useState } from 'react';
import { Icon } from '@iconify/react';

import {
  Box,
  Card,
  Table,
  Button,
  TableRow,
  Checkbox,
  TableBody,
  TableCell,
  TextField,
  TableHead,
  Typography,
  IconButton,
  TablePagination,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

const TABLE_HEAD = [
  { id: 'sharedOn', label: 'Shared On', width: 332},
  { id: 'email', label: 'Team Member Email', width: 308 },
  { id: 'permission', label: 'Permission Type', width: 332 },
  { id: 'accessFolder', label: 'Access Folder' , width: 198},
];

const initialTableData = [
  {
    id: 1,
    sharedOn: 'Apr 04, 2025 12:24:16',
    email: 'neeraj.agarwal@pabbly.com',
    company: 'Company A',
    permission: 'Write Access',
  },
  {
    id: 2,
    sharedOn: 'Apr 03, 2025 12:24:16',
    email: 'hardik.pradhan@pabbly.com',
    company: 'Company C',
    permission: 'Read Access',
  },
  {
    id: 3,
    sharedOn: 'Apr 02, 2025 12:24:16',
    email: 'neeraj.agarwal@pabbly.com',
    company: 'Company B',
    permission: 'Write Access',
  },
  {
    id: 4,
    sharedOn: 'Apr 01, 2025 12:24:16',
    email: 'nikhil.patel@pabbly.com',
    company: 'Client B',
    permission: 'Write Access',
  },
  {
    id: 5,
    sharedOn: 'Mar 31, 2025 12:24:16',
    email: 'rajendra.jatav@pabbly.com',
    company: 'Company E',
    permission: 'Read Access',
  },
];

export function TeamMembersListView2() {
  const [tableData] = useState(initialTableData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <Box sx={{ p: 2, borderBottom: '1px solid #E0E0E0' }}>
        <Typography variant="h5">Team Members</Typography>
        <Typography variant="body2" color="textSecondary">
          View and manage team members with assigned permissions. Add new members, filter access,
          and update roles efficiently.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, width: '100%' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by email or folder name..."
          fullWidth
          InputProps={{
            sx: { height: 54 },
          }}
        />
        <Button
          variant="text"
          color="primary"
          sx={{ pt: 1.5, pb: 1.5 }}
          startIcon={<Iconify icon="mdi:filter" />}
        >
          Filters
        </Button>
      </Box>
      <Scrollbar>
        <Table sx={{ minWidth: 960 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 60 }}>
                <Checkbox />
              </TableCell>
              {TABLE_HEAD.map((head) => (
                <TableCell
                  key={head.id}
                  sx={{
                    fontWeight: 'bold',
                    textAlign: head.id === 'accessFolder' ? 'right' : 'left',
                  }}
                >
                  {head.label}
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ width: 60 }}>
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ paddingLeft: 2 }}>{row.sharedOn}</TableCell>
                <TableCell>
                  {row.email}
                  <br />
                  <Typography variant="body2" color="textSecondary">
                    {row.company}
                  </Typography>
                </TableCell>
                <TableCell>{row.permission}</TableCell>
                <TableCell sx={{ textAlign: 'right' }}>
                  <Button variant="outlined" color="primary" size="medium">
                    Access Now
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Icon icon="mdi:dots-vertical" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
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
      />
    </Card>
  );
}
