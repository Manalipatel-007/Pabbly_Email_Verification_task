import { Icon } from '@iconify/react';

import {
  Box,
  List,
  Card,
  Button,
  ListItem,
  IconButton,
  Typography,
  ListItemText,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

const folders = [
  'Home',
  'Pabbly Connect',
  'Main Folder',
  'Pabbly Subscription Billing',
  'Pabbly Email Marketing',
  'Pabbly Form Builder',
  'Pabbly Hook',
  'Trash',
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
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Folders
        </Typography>
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
      </Box>

      {/* Folder List */}
      <List>
        {folders.map((folder, index) => (
          <ListItem
            key={index}
            secondaryAction={
              index !== 0 && index !== folders.length - 1 ? (
                <IconButton edge="end" size="small" sx={{ color: 'rgba(0, 0, 0, 0.38)' }}>
                  <Icon icon="mdi:dots-vertical" width={20} />
                </IconButton>
              ) : null
            }
            sx={{
              borderBottom: folder === 'Pabbly Hook' ? '1px dashed rgba(0, 0, 0, 0.12)' : 'none',
              mb: 1.2,
              pb: folder === 'Pabbly Hook' ? 2 : 0,
              '&:hover': { backgroundColor: '#F4F6F8' },
              borderRadius: 1,
              alignItems: 'center',
            }}
          >
            <ListItemText
              primary={
                <>
                  {folder}{' '}
                  <Typography
                    component="span"
                    sx={{ color: 'text.secondary', fontSize: 'inherit' }}
                  >
                    (0)
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
