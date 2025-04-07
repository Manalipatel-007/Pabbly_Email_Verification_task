import { useState } from 'react';
import { m } from 'framer-motion';

import {
  Box,
  List,
  Popover,
  TextField,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { Scrollbar } from 'src/components/scrollbar';

const applications = [
  { icon: 'mdi:apps', label: 'View All Applications', color: 'error.main' },
  { icon: 'mdi:puzzle', label: 'Pabbly Connect', color: 'primary.main' },
  { icon: 'mdi:currency-usd', label: 'Pabbly Subscription Billing', color: 'pink.main' },
  { icon: 'mdi:email', label: 'Pabbly Email Marketing', color: 'purple.main' },
  { icon: 'mdi:form-textbox', label: 'Pabbly Form Builder', color: 'orange.main' },
  { icon: 'mdi:check-circle', label: 'Pabbly Email Verification', color: 'success.main' },
  { icon: 'mdi:link', label: 'Pabbly Hook', color: 'cyan.main' },
  { icon: 'mdi:message', label: 'Pabbly Chatflow', color: 'deepPurple.main' },
];

export function ContactsPopover({ sx, ...other }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <IconButton
        component={m.button}
        whileTap="tap"
        // whileHover="hover"
        variants={varHover(1.05)}
        onClick={handleOpen}
        sx={{ border: 1, borderColor: 'divider', borderRadius: 1, marginRight: '5px', ...sx }}
        {...other}
      >
        <Iconify icon="ri:grid-fill" style={{ width: 22, height: 22 }} />
      </IconButton>

      <Box sx={{ mr: 2 }}>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          // sx={{ mt: 2, mr: 4 }}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            Search Application
          </Typography>

          <TextField
            sx={{ mb: 2 }}
            fullWidth
            variant="outlined"
            placeholder="Search..."
            size="small"
          />

          <Scrollbar sx={{ maxHeight: 320, width: 300 }} borderTop={1} borderColor="divider">
            <List>
              {applications.map((app, index) => (
                <ListItemButton key={index} sx={{ p: 1.2 }}>
                  <ListItemIcon>
                    <Iconify icon={app.icon} sx={{ color: app.color, fontSize: 24 }} />
                  </ListItemIcon>
                  <ListItemText primary={app.label} primaryTypographyProps={{ variant: 'body2' }} />
                </ListItemButton>
              ))}
            </List>
          </Scrollbar>
        </Popover>
      </Box>
    </Box>
  );
}
