import { Box, Button, Typography } from '@mui/material';


export default function PageHeading({ title, description, showButton = true, buttonTitle }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
      <Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {title}
          </Typography>
        </Box>
      </Box>

      {showButton && (
        <Box>
          <Button
            variant="outlined"
            color="primary"
            size="large"
          >
            View All Videos
          </Button>
        </Box>
      )}
    </Box>
  );
}
