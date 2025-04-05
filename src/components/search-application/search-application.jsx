import { Icon } from "@iconify/react";
import React, { useState } from "react";

import { Menu, MenuItem, TextField, IconButton, ListItemIcon, ListItemText } from "@mui/material";

const applications = [
  { name: "View All Applications", icon: "mdi:apps" },
  { name: "Pabbly Connect", icon: "mdi:connection" },
  { name: "Pabbly Subscription Billing", icon: "mdi:currency-usd" },
  { name: "Pabbly Email Marketing", icon: "mdi:email" },
  { name: "Pabbly Form Builder", icon: "mdi:file-document" },
  { name: "Pabbly Email Verification", icon: "mdi:check-circle" },
  { name: "Pabbly Hook", icon: "mdi:code-braces" },
  { name: "Pabbly Chatflow", icon: "mdi:chat" },
];

export default function AppDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Icon icon="mdi:apps" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          fullWidth
          InputProps={{
            startAdornment: (
              <ListItemIcon>
                <Icon icon="mdi:magnify" />
              </ListItemIcon>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        {applications
          .filter((app) => app.name.toLowerCase().includes(search.toLowerCase()))
          .map((app, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <ListItemIcon>
                <Icon icon={app.icon} />
              </ListItemIcon>
              <ListItemText primary={app.name} />
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
