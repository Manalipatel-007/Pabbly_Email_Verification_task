import { Icon } from '@iconify/react';

import {
  Box,
  List,
  Card,
  Button,
  Tooltip,
  ListItem,
  IconButton,
  Typography,
  ListItemText,
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
  return (
    <Card elevation={3} sx={{ padding: 3, width: 330, borderRadius: 2 }}>
      {/* Header Section */}
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
          PopperProps={{
            sx: {
              '& .MuiTooltip-tooltip': {
                textAlign: 'left',
              },
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Folders
          </Typography>
        </Tooltip>

        <Tooltip title="Create a new Folder" placement="top" arrow>
          <Button
            variant="contained"
            color="primary"
            sx={{
              minWidth: 36,
              minHeight: 36,
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Iconify
              icon="heroicons:plus-circle-16-solid"
              sx={{ width: 20, height: 20, color: 'white' }}
            />
          </Button>
        </Tooltip>
      </Box>

      {/* Folder List */}
      <List>
        {folders.map((folder, index) => (
          <ListItem
            key={index}
            secondaryAction={
              index !== 0 && index !== folders.length - 1 ? (
                <Tooltip title="Click to see options" placement="top" arrow>
                  <IconButton edge="end" size="small" sx={{ color: 'rgba(0, 0, 0, 0.38)' }}>
                    <Icon icon="mdi:dots-vertical" width={20} />
                  </IconButton>
                </Tooltip>
              ) : null
            }
            sx={{
              borderBottom:
                folder.name === 'Pabbly Hook' ? '1px dashed rgba(0, 0, 0, 0.12)' : 'none',
              mb: 1.2,
              pb: folder.name === 'Pabbly Hook' ? 2 : 0,
              '&:hover': { backgroundColor: '#F4F6F8' },
              borderRadius: 1,
              alignItems: 'center',
            }}
          >
            <Tooltip
              title={folder.tooltip}
              placement="top"
              arrow
              PopperProps={{
                sx: {
                  '& .MuiTooltip-tooltip': {
                    alignitems: 'left',
                  },
                },
              }}
            >
              <ListItemText
                primary={
                  <>
                    {folder.name}{' '}
                    <Typography
                      component="span"
                      sx={{ color: 'text.secondary', fontSize: 'inherit' }}
                    >
                      (0)
                    </Typography>
                  </>
                }
              />
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
