import React from 'react';
import { Icon } from '@iconify/react';

import {
  Box,
  Card,
  Button,
  TextField,
  Typography,
  IconButton,
  CardContent,
  InputAdornment,
} from '@mui/material';

const APIKeysCard = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).catch((err) => console.error('Copy failed', err));
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ width: '100%', boxShadow: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography
            pb={2}
            variant="h6"
            fontWeight="bold"
            sx={{ borderBottom: '1px solid #E0E0E0' }}
          >
            API
          </Typography>

          {/* API Key */}
          <Box mt={2}>
            <TextField
              fullWidth
              label="API Key" // ✅ Floating label inside the input
              value="********************"
              type="password"
              variant="outlined"
              size="medium"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleCopy('your-api-key')}>
                      <Icon icon="mdi:content-copy" width="20" height="20" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mt: 1 }}
            />
            <Typography variant="caption" color="textSecondary" mt={1} display="block">
              Use the &apos;Copy&apos; button to securely copy it. Keep it private and don&apos;t
              share with others.{' '}
              <a href="#" style={{ textDecoration: 'underline', color: 'primary' }}>
                Learn more
              </a>
            </Typography>
          </Box>

          {/* Secret Key */}
          <Box mt={2}>
            <TextField
              fullWidth
              label="Secret Key" // ✅
              value="********************"
              type="password"
              variant="outlined"
              size="medium"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleCopy('your-secret-key')}>
                      <Icon icon="mdi:content-copy" width="20" height="20" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mt: 1 }}
            />
            <Typography variant="caption" color="textSecondary" mt={1} display="block">
              Use the &apos;Copy&apos; button to securely copy it. Keep it private and don&apos;t
              share with others.{' '}
              <a href="#" style={{ textDecoration: 'underline', color: 'primary' }}>
                Learn more
              </a>
            </Typography>
          </Box>

          {/* Generate API Keys Button */}
          <Box mt={3} width="15%">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Icon icon="mdi:key-plus" width="20" height="20" />
              Generate API Keys
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default APIKeysCard;
