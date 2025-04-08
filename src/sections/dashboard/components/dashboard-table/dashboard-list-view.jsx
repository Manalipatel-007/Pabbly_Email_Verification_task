import { useState, useEffect } from 'react';

import {
  Box,
  Tab,
  Card,
  Tabs,
  Menu,
  Table,
  Button,
  Dialog,
  Tooltip,
  MenuItem,
  TableRow,
  Checkbox,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
  TablePagination,
} from '@mui/material';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

const STATUS_TABS = [
  { value: 'all', label: 'All', count: 5, color: 'black', textColor: 'white' },
  { value: 'verified', label: 'Verified', count: 1, color: '#D1FADF', textColor: '#027A48' },
  { value: 'processing', label: 'Processing', count: 1, color: '#D1E9FF', textColor: '#175CD3' },
  { value: 'uploading', label: 'Uploading', count: 1, color: '#FEF0C7', textColor: '#DC6803' },
  { value: 'unverified', label: 'Unverified', count: 2, color: '#FECDCA', textColor: '#D92D20' },
];

const TABLE_DATA = [
  {
    id: 1,
    status: 'Uploading',
    name: 'List 1',
    date: 'Oct 23, 2024 17:45:32',
    emails: 128,
    action: 'Uploading',
  },
  {
    id: 2,
    status: 'Unverified',
    name: 'List 2',
    date: 'Oct 23, 2024 17:45:32',
    emails: 65,
    action: 'Start Verification',
  },
  {
    id: 3,
    status: 'Unverified',
    name: 'List 3',
    date: 'Oct 23, 2024 17:45:32',
    emails: 250,
    action: 'Start Verification',
  },
  {
    id: 4,
    status: 'Processing',
    name: 'List 4',
    date: 'Oct 23, 2024 17:45:32',
    emails: 65,
    action: 'Verification In Progress',
    credit: '65 Credit Consumed',
  },
  {
    id: 5,
    status: 'Verified',
    name: 'List 5',
    date: 'Oct 23, 2024 17:45:32',
    emails: 653343,
    action: 'Download Report',
    credit: '653343 Credit Consumed',
  },
];

export default function DashboardListView() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [moveDialogOpen, setMoveDialogOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('');

  const handleMenuOpen = (event, row) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedRow(null);
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuAnchorEl) handleMenuClose();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuAnchorEl]);

  const filteredData = TABLE_DATA.filter(
    (row) =>
      (selectedTab === 'all' || row.status.toLowerCase() === selectedTab) &&
      row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Card>
      {/* Header and Tabs */}
      <Box p={3} pt={3} pb={3} borderBottom={1} borderColor="rgba(145, 158, 171, 0.2)">
        <Typography variant="h5" marginBottom={1}>
          Home
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Verify and manage all your uploaded email lists here.
        </Typography>
      </Box>

      <Box pl={3} borderBottom={2} borderColor="rgba(145, 158, 171, 0.1)">
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          {STATUS_TABS.map((tab) => (
            <Tooltip key={tab.value} title={`Filter by ${tab.label}`} arrow placement="top">
              <Tab
                value={tab.value}
                label={
                  <Box display="flex" alignItems="center" gap={1}>
                    {tab.label}
                    <Label
                      sx={{ backgroundColor: tab.color, color: tab.textColor, borderRadius: '8px' }}
                    >
                      {tab.count}
                    </Label>
                  </Box>
                }
                sx={{
                  borderBottom:
                    selectedTab === tab.value ? '3px solid #000' : '3px solid transparent',
                  borderRadius: 0,
                  mx: 0.5,
                  textTransform: 'none',
                  minHeight: 48,
                }}
              />
            </Tooltip>
          ))}
        </Tabs>
      </Box>

      {/* Search and Refresh */}
      <Box p={2.5} pl={3} display="flex" alignItems="center" gap={1} width="100%">
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Search by email list name..."
          InputProps={{ sx: { height: 54 } }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Tooltip title="Refresh" arrow placement="top">
          <IconButton color="primary">
            <Iconify icon="mynaui:refresh" />
          </IconButton>
        </Tooltip>
      </Box>

{/* ----------------------------------------------------------------------------------------------------------------------- */}
      {selectedTab !== 'all' && (
        <Box px={2} mb={2} pl={4} >
          <Typography
            sx={{ fontSize: '0.875rem', fontWeight: 500 }}
            variant="subtitle2"
            gutterBottom
          >
            {filteredData.length} result{filteredData.length !== 1 && 's'} found
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Box
              border="1px dashed #919eab33"
              display="flex"
              alignItems="center"
              gap={1}
              px={1.5}
              py={0.5}
              borderRadius={1}
            >
              <Typography variant="body2" fontWeight={500}>
                Status:
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                px={1}
                py={0.25}
                sx={{
                  backgroundColor: '#919eab1f',
                  color: '#1c252e',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
              >
                {STATUS_TABS.find((tab) => tab.value === selectedTab)?.label}
                <IconButton
                  size="small"
                  onClick={() => setSelectedTab('all')}
                  sx={{
                    ml: 0.5,
                    p: 0.2,
                    color: '#919eab',
                    '&:hover': {
                      background: 'transparent',
                    },
                  }}
                >
                  <Iconify icon="gridicons:cross-circle" width={16} />
                </IconButton>
              </Box>
            </Box>

            <Button
              onClick={() => setSelectedTab('all')}
              startIcon={<Iconify icon="weui:delete-filled" />}
              sx={{ textTransform: 'none', color: 'error.main', gap: '2px', minWidth: 0 }}
            >
              Clear
            </Button>
          </Box>
        </Box>
      )}

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell width={305}>Status / Name / Date</TableCell>
              <TableCell>Number of Emails / Credits Consumed</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Label
                    color={
                      row.status === 'Unverified'
                        ? 'error'
                        : row.status === 'Processing'
                          ? 'info'
                          : 'success'
                    }
                  >
                    {row.status}
                  </Label>
                  <Typography>{row.name}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {row.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{ fontSize: '14px' }}
                  >{`Contains ${row.emails} Emails`}</Typography>
                  {row.credit && (
                    <Typography sx={{ color: '#22c55e', fontSize: '14px' }}>
                      {row.credit}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Button color="primary" size="medium" variant="outlined">
                    {row.action}
                  </Button>
                </TableCell>
                <TableCell sx={{ pl: 1 }}>
                  {row.status === 'Verified' || row.status === 'Unverified' ? (
                    <Tooltip title="Click to see more options" arrow placement="top">
                      <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                        <Iconify icon="mdi:dots-vertical" />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Actions Unavailable during verification" arrow placement="top">
                      <IconButton>
                        <Iconify icon="mdi:dots-vertical" color="rgba(28, 27, 46, 0.2)" />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ borderTop: '1px dashed #919eab33', px: 2 }}>
        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
          rowsPerPageOptions={[5, 10, 25]}
          showFirstButton
          showLastButton
        />
      </Box>

      {/* Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mr: 4,
            borderRadius: 2,
            maxWidth: '150px',
            boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setMoveDialogOpen(true);
            handleMenuClose();
          }}
        >
          <Iconify icon="mdi:folder-move-outline" sx={{ mr: 1 }} /> Move to Folder
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
          <Iconify icon="mdi:trash-can-outline" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      {/* Delete Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Do you really want to delete the email list?</DialogTitle>
        <DialogContent sx={{ fontSize: '14px' }}>
          Note that when an email list is deleted it is moved to the
          <br />
          trash folder. <strong>{selectedRow?.name}</strong>?
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleDialogClose}>
            Delete
          </Button>
          <Button onClick={handleDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Move to Folder Dialog */}
      <Dialog
        open={moveDialogOpen}
        onClose={() => setMoveDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Move To Folder</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              Select Folder
            </Typography>
            <Box sx={{ borderRadius: 1.5, p: 1, mt: 1 }}>
              <TextField
                select
                fullWidth
                size="small"
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                SelectProps={{ displayEmpty: true }}
              >
                <MenuItem disabled value="">
                  Select Folder
                </MenuItem>
                <MenuItem value="Magnet Brains (2)">Home(0)</MenuItem>
                <MenuItem value="Leads 2024">Magnet Brains(2)</MenuItem>
                <MenuItem value="Campaign X">Pabbly Hook</MenuItem>
                <MenuItem value="Campaign X">Pabbly Connect</MenuItem>
                <MenuItem value="Campaign X">Pabbly Subscription Billing</MenuItem>
                <MenuItem value="Campaign X">Pabbly Admin</MenuItem>
                <MenuItem value="Campaign X">Pabbly Chatflow</MenuItem>
                <MenuItem value="Campaign X">Pabbly Form Builder</MenuItem>
              </TextField>
            </Box>
            <Typography variant="caption" sx={{ mt: 2, display: 'block' }}>
              Select the folder where you want to move the list.{' '}
              <a href="#" style={{ color: '#1976d2' }}>
                Learn more
              </a>
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button variant="contained" onClick={() => setMoveDialogOpen(false)}>
            Move
          </Button>
          <Button variant="outlined" onClick={() => setMoveDialogOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
