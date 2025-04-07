import React, { useState } from 'react';

import {
  Box,
  Card,
  Select,
  Button,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  CardContent,
  FormControl,
} from '@mui/material';

const timeZones = [
  '(UTC -12:00) Baker Island',
  '(UTC -11:00) Samoa',
  '(UTC -10:00) Hawaii',
  '(UTC -09:00) Alaska',
  '(UTC -08:00) Pacific Time',
  '(UTC -07:00) Mountain Time',
  '(UTC -06:00) Central Time',
  '(UTC -05:00) Eastern Time',
  '(UTC -04:00) America/Cuiaba',
  '(UTC -03:00) Buenos Aires',
  '(UTC -02:00) South Georgia',
  '(UTC -01:00) Azores',
  '(UTC +00:00) UTC',
  '(UTC +01:00) Central European Time',
  '(UTC +02:00) Eastern European Time',
];

const TimeZoneSelector = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('(UTC -04:00) America/Cuiaba');
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTimeZones = timeZones.filter((zone) =>
    zone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card sx={{ margin: 'auto', p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Time Zone
        </Typography>

        <FormControl fullWidth sx={{ mb: 2, mt: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
          <InputLabel sx={{ bgcolor: 'white', px: 1 }}>Select Time Zone</InputLabel>
          <Select
            value={selectedTimeZone}
            onChange={handleChange}
            displayEmpty
            sx={{ borderRadius: 1 }}
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: 450,
                  overflowY: 'auto',
                },
              },
            }}
          >
            {/* Sticky Search Bar */}
            <Box sx={{ position: 'sticky', top: 0, bgcolor: 'white', zIndex: 1, p: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search time zone..."
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Box>

            {/* Time Zone List */}
            {filteredTimeZones.map((zone, index) => (
              <MenuItem key={index} value={zone}>
                {zone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="body2" color="text.secondary">
          Select the time zone that matches your current location.{' '}
          <a href="#" style={{ textDecoration: 'underline', fontSize: '12px', color: '#078DEE' }}>
            Learn more
          </a>
        </Typography>

        <Box mt={2}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TimeZoneSelector;
