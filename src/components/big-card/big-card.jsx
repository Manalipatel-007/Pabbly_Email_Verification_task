// import { Icon } from '@iconify/react';

// import Box from '@mui/material/Box';
// import { Card } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

// import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

// // import { LearnMoreTypography } from '../learn-more/learn-more';

// export default function BigCard({ title, description, items, style, action, img, sx, ...other }) {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         p: 5,
//         gap: 2,
//         borderRadius: 2,
//         display: 'flex',
//         height: '100%',
//         position: 'relative',
//         pl: { xs: 3, md: 5 },
//         alignItems: 'center', // Center content vertically
//         color: 'common.black',
//         backgroundColor: 'common.white',
//         textAlign: 'left',
//         flexDirection: { xs: 'column', md: 'row' },
//         ...sx,
//       }}
//       {...other}
//     >
//       {/* Left Content */}
//       <Box
//         sx={{
//           display: 'flex',
//           flex: '1 1 auto',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//         }}
//       >
//         <Tooltip title="View file upload guidelines for email verification." placement="top" arrow>
//           <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
//             {title}
//           </Typography>
//         </Tooltip>

//         <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
//           {description}
//         </Typography>

//         <Box component="ul" sx={style} mb={2} p={1}>
//           {items.map((item, index) => (
//             <li key={index}>
//               <Typography variant="body2" fontWeight={400} color="#637381" p={0.1}>
//                 {item}
//                 {index === items.length - 1 && <LearnMoreTypography />}
//               </Typography>
//             </li>
//           ))}
//         </Box>

//         {action && action}
//       </Box>

//       {/* Image Section */}
//       {img && (
//         <Box
//           sx={{
//             display: 'flex',
//             flex: '0 0 auto',
//             justifyContent: 'center',
//             alignItems: 'center',
//             mt: { xs: 3, md: 0 },
//             borderRadius: 2,
//           }}
//         >
//           <Card
//             sx={{
//               p: 0,
//               boxShadow: 'none',
//               borderRadius: 2,
//               position: 'relative',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <Tooltip title="Click to watch tutorial." placement="top" arrow>
//               <Box
//                 component="img"
//                 src={img}
//                 alt="Tutorial Thumbnail"
//                 sx={{
//                   width: '420px',
//                   height: 'auto',
//                   objectFit: 'cover',
//                   borderRadius: 2,
//                 }}
//               />
//             </Tooltip>

//             <Box
//               component="button"
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 background: 'transparent',
//                 borderRadius: '50%',
//                 border: 'none',
//                 cursor: 'pointer',
//                 '&:focus': { outline: 'none' },
//               }}
//             >
//               <Icon
//                 icon="icon-park-solid:play"
//                 style={{
//                   fontSize: '48px',
//                   borderRadius: '50%',
//                   color: theme.palette.primary.main,
//                   animation: 'pulse 1.5s infinite',
//                 }}
//               />
//             </Box>

//             <style>
//               {`
//                 @keyframes pulse {
//                   0% {
//                     box-shadow: 0 0 0 0 rgba(7, 141, 238, 0.3);
//                     transform: scale(1);
//                   }
//                   50% {
//                     box-shadow: 0 0 0 10px rgba(7, 141, 238, 0.1);
//                     transform: scale(1.0565);
//                   }
//                   100% {
//                     box-shadow: 0 0 0 0 rgba(7, 141, 238, 0);
//                     transform: scale(1);
//                   }
//                 }
//               `}
//             </style>
//           </Card>
//         </Box>
//       )}
//     </Box>
//   );
// }

// import { Icon } from '@iconify/react';

// import Box from '@mui/material/Box';
// import { Card } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

// import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

// export default function BigCard({ title, description, items, style, action, img, sx, ...other }) {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         pt: 4,
//         gap: 2,
//         borderRadius: 2,
//         display: 'flex',
//         height: '100%',
//         position: 'relative',
//         pl: { xs: 3, md: 5 },
//         alignItems: 'center',
//         color: 'common.black',
//         backgroundColor: 'common.white',
//         textAlign: 'left',
//         flexDirection: { xs: 'column', md: 'row' },
//         ...sx,
//       }}
//       {...other}
//     >
//       {/* Left Content */}
//       <Box
//         sx={{
//           display: 'flex',
//           flex: '1 1 auto',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//         }}
//       >
//         <Tooltip title="View file upload guidelines for email verification." placement="top" arrow>
//           <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
//             {title}
//           </Typography>
//         </Tooltip>

//         <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
//           {description}
//         </Typography>

//         <Box component="ul" sx={style} mb={2} p={1}>
//           {items.map((item, index) => (
//             <li key={index}>
//               <Typography variant="body2" fontWeight={400} color="#637381" p={0.1}>
//                 {item}
//                 {index === items.length - 1 && <LearnMoreTypography />}
//               </Typography>
//             </li>
//           ))}
//         </Box>

//         {action && action}
//       </Box>

//       {/* Image Section */}
//       {img && (
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: {
//               xs: 'flex-start', // Mobile: align left
//               sm: 'flex-start', // Tablet: align left
//               md: 'center', // Laptop and up: center
//             },
//             alignItems: 'center',
//             mt: { xs: 3, md: 0 },
//             width: '100%',
//           }}
//         >
//           <Card
//             sx={{
//               p: 0,
//               boxShadow: 'none',
//               borderRadius: 2,
//               position: 'relative',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <Tooltip title="Click to watch tutorial." placement="top" arrow>
//               <Box
//                 component="img"
//                 src={img}
//                 alt="Tutorial Thumbnail"
//                 sx={{
//                   width: '420px',
//                   height: 'auto',
//                   objectFit: 'cover',
//                   borderRadius: 2,
//                 }}
//               />
//             </Tooltip>

//             <Box
//               component="button"
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 background: 'transparent',
//                 borderRadius: '50%',
//                 border: 'none',
//                 cursor: 'pointer',
//                 '&:focus': { outline: 'none' },
//               }}
//             >
//               <Icon
//                 icon="icon-park-solid:play"
//                 style={{
//                   fontSize: '48px',
//                   borderRadius: '50%',
//                   color: theme.palette.primary.main,
//                   animation: 'pulse 1.5s infinite',
//                 }}
//               />
//             </Box>

//             <style>
//               {`
//                 @keyframes pulse {
//                   0% {
//                     box-shadow: 0 0 0 0 rgba(7, 141, 238, 0.3);
//                     transform: scale(1);
//                   }
//                   50% {
//                     box-shadow: 0 0 0 10px rgba(7, 141, 238, 0.1);
//                     transform: scale(1.0565);
//                   }
//                   100% {
//                     box-shadow: 0 0 0 0 rgba(7, 141, 238, 0);
//                     transform: scale(1);
//                   }
//                 }
//               `}
//             </style>
//           </Card>
//         </Box>
//       )}
//     </Box>
//   );
// }

import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

export default function BigCard({ title, description, items, style, action, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 5,
        gap: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        color: 'common.black',
        backgroundColor: 'common.white',
        textAlign: 'left',
        width: '100%',
        ...sx,
      }}
      {...other}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'flex-start' },
        }}
      >
        <Tooltip title="View file upload guidelines for email verification." placement="top" arrow>
          <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
            {title}
          </Typography>
        </Tooltip>

        <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
          {description}
        </Typography>

        <Box component="ul" sx={style} mb={2} p={1}>
          {items.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" fontWeight={400} color="#637381" p={0.1}>
                {item}
                {index === items.length - 1 && <LearnMoreTypography />}
              </Typography>
            </li>
          ))}
        </Box>

        {action && action}
      </Box>

      {/* Image Section */}
      {img && (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: {
              xs: 'flex-start',
              sm: 'flex-start',
              md: 'center',
            },
            alignItems: 'center',
            mt: { xs: 3, md: 0 },
          }}
        >
          <Card
            sx={{
              p: 0,
              boxShadow: 'none',
              borderRadius: 2,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Tooltip title="Click to watch tutorial." placement="top" arrow>
              <Box
                component="img"
                src={img}
                alt="Tutorial Thumbnail"
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Tooltip>

            <Box
              component="button"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'transparent',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                '&:focus': { outline: 'none' },
              }}
            >
              <Icon
                icon="icon-park-solid:play"
                style={{
                  fontSize: '48px',
                  borderRadius: '50%',
                  color: theme.palette.primary.main,
                  animation: 'pulse 1.5s infinite',
                }}
              />
            </Box>

            <style>
              {`
                @keyframes pulse {
                  0% {
                    box-shadow: 0 0 0 0 rgba(7, 141, 238, 0.3);
                    transform: scale(1);
                  }
                  50% {
                    box-shadow: 0 0 0 10px rgba(7, 141, 238, 0.1);
                    transform: scale(1.0565);
                  }
                  100% {
                    box-shadow: 0 0 0 0 rgba(7, 141, 238, 0);
                    transform: scale(1);
                  }
                }
              `}
            </style>
          </Card>
        </Box>
      )}
    </Box>
  );
}
