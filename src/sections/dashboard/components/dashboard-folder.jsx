import { useState } from 'react';
import { Icon } from '@iconify/react';

import {
  Box,
  List,
  Card,
  Link,
  Button,
  Dialog,
  Tooltip,
  Popover,
  ListItem,
  TextField,
  IconButton,
  Typography,
  DialogTitle,
  ListItemText,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

const folders = [
  { name: 'Home', tooltip: 'Folder Name : Home' },
  { name: 'Pabbly Connect', tooltip: 'Folder Name : Pabbly Connect' },
  { name: 'Main Folder', tooltip: 'Folder Name : Main Folder' },
  { name: 'Pabbly Subscription Billing', tooltip: 'Folder Name : Pabbly Subscription Billing' },
  { name: 'Pabbly Email Marketing', tooltip: 'Folder Name : Pabbly Email Marketing' },
  { name: 'Pabbly Form Builder', tooltip: 'Folder Name : Pabbly Form Builder' },
  { name: 'Pabbly Hook', tooltip: 'Folder Name : Pabbly Hook' },
  { name: 'Trash', tooltip: 'Folder Name : Trash' },
];

export default function FolderList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [folderName, setFolderName] = useState('');

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveIndex(null);
  };

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFolderName('');
  };

  const handleCreateFolder = () => {
    console.log('Create Folder:', folderName);
    handleCloseDialog();
  };

  const open = Boolean(anchorEl);

  return (
    <Card
      elevation={3}
      sx={{
        padding: 3,
        width: { xs: '100%', md: 330 },
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
          pb: 2,
          borderBottom: '1px dashed rgba(0, 0, 0, 0.12)',
        }}
      >
        <Tooltip
          title="You can create folders and manage connection with them"
          placement="top"
          arrow
        >
          <Typography variant="h6" sx={{ fontWeight: '700' }}>
            Folders
          </Typography>
        </Tooltip>

        <Tooltip title="Create a new Folder" placement="top" arrow>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenDialog}
            sx={{
              minWidth: 36,
              minHeight: 36,
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: '#0351ab', 
                transition: 'none',
              },
            }}
          >
            <Iconify
              icon="charm:plus"
              sx={{ width: 24, height: 24, color: 'white' }}
            />
          </Button>
        </Tooltip>
      </Box>

      <List>
        {folders.map((folder, index) => (
          <ListItem
            key={index}
            secondaryAction={
              index !== 0 && index !== folders.length - 1 ? (
                <Tooltip title="Click to see options" placement="top" arrow>
                  <IconButton
                    edge="end"
                    size="small"
                    sx={{ color: 'rgba(0, 0, 0, 0.38)' }}
                    onClick={(e) => handleMenuOpen(e, index)}
                  >
                    <Icon icon="mdi:dots-vertical" width={20} />
                  </IconButton>
                </Tooltip>
              ) : null
            }
            sx={{
              borderBottom:
                folder.name === 'Pabbly Hook' ? '1px dashed rgba(0, 0, 0, 0.12)' : 'none',
              mb: 0.5,
              pb: folder.name === 'Pabbly Hook' ? 1 : 0.6,
              '&:hover': { backgroundColor: '#F4F6F8' },
              pt: folder.name === 'Trash' ? 2 : 0.6,
              borderRadius: 1,
              alignItems: 'center',
            }}
          >
            <Tooltip title={folder.tooltip} placement="top" arrow>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    sx={{ color: '#1c252e', fontWeight: 500, fontSize: '14px' }}
                  >
                    {folder.name}{' '}
                    <Typography
                      component="span"
                      sx={{ color: 'text.secondary', fontSize: 'inherit' }}
                    >
                      (0)
                    </Typography>
                  </Typography>
                }
              />
            </Tooltip>
          </ListItem>
        ))}
      </List>

      {/* Options Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
        transformOrigin={{ vertical: 'center', horizontal: 'right' }}
        PaperProps={{
          sx: {
            ml: -1,
            width: 180,
            borderRadius: 2,
            boxShadow: 3,
            p: 1,
          },
        }}
      >
        <Box>
          <Button
            fullWidth
            startIcon={<Iconify icon="fluent:rename-24-filled" />}
            sx={{
              justifyContent: 'flex-start',
              color: 'text.primary',
              fontWeight: 400,
              px: 1,
              py: 0,
            }}
            onClick={handleMenuClose}
          >
            Rename
          </Button>
          <Button
            fullWidth
            startIcon={<Iconify icon="solar:share-bold" />}
            sx={{
              justifyContent: 'flex-start',
              color: 'text.primary',
              fontWeight: 400,
              px: 1,
              py: 1,
            }}
            onClick={handleMenuClose}
          >
            Share
          </Button>
          <Box sx={{ borderTop: '1px dashed #e0e0e0', fontWeight: 400, my: 1 }} />
          <Button
            fullWidth
            startIcon={<Icon icon="solar:trash-bin-trash-bold" />}
            sx={{ justifyContent: 'flex-start', color: 'error.main', px: 1, py: 0.3 }}
            onClick={handleMenuClose}
          >
            Delete
          </Button>
        </Box>
      </Popover>

      {/* Create Folder Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: { borderRadius: 3, p: 2, width: 600 },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Create Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            placeholder="Folder Name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            sx={{ mt: 1.5, mb: 0.5 }}
            InputProps={{
              sx: { borderRadius: 1 },
            }}
          />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Enter the name of the folder here.{' '}
            <Link href="#" underline="hover"  fontWeight={500}>
              Learn more
            </Link>
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button variant="contained" size='large' borderBottom='1px dashed #e0e0e0' color='primary' onClick={handleCreateFolder} sx={{ borderRadius: 1 }}>
            Create Folder
          </Button>
          <Button variant="outlined" size='large'  onClick={handleCloseDialog} sx={{ borderRadius: 1 }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
