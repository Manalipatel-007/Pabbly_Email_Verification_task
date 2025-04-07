// import { Box, Button, Typography } from '@mui/material';

// export default function PageHeading({ title, description, showButton = true, buttonTitle }) {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
//       <Box>
//         <Box>
//           <Typography variant="h4" sx={{ mb: 1 }}>
//             {title}
//           </Typography>
//         </Box>
//       </Box>

//       {showButton && (
//         <Box>
//           <Button
//             variant="outlined"
//             color="primary"
//             size="large"
//           >
//             View All Videos
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// }

import { Box, Button, Typography } from '@mui/material';

export default function PageHeading({ title, description, showButton = true, buttonTitle }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2, // adds space between heading and button in column layout
        mt: 4,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
      </Box>

      {showButton && (
        <Button variant="outlined" color="primary" size="large">
          {buttonTitle || 'View All Videos'}
        </Button>
      )}
    </Box>
  );
}
