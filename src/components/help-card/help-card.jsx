// import Box from '@mui/material/Box';
// import { Card } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

// import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

// export default function HelpCard({ title, description, items, style, action, img, sx, ...other }) {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         p: 5,
//         gap: 4,
//         borderRadius: 2,
//         display: 'flex',
//         height: { md: 1 },
//         position: 'relative',
//         pl: { xs: 3, md: 5 },
//         alignItems: 'center',
//         color: 'common.black',
//         backgroundColor: 'common.white',
//         textAlign: { md: 'left' },
//         flexDirection: { xs: 'column', md: 'row' },
//         ...sx,
//       }}
//       {...other}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flex: '1 1 auto',
//           flexDirection: 'column',
//           alignItems: { xs: 'center', md: 'flex-start' },
//         }}
//       >
//         <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
//           {title}
//         </Typography>

//         <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
//           {description}
//         </Typography>
//         <Box component="ul" sx={style} mb={2} p={1}>
//           {items.map((item, index) => (
//             <li key={index}>
//               <Typography variant="body2" fontWeight={400} color="#637381">
//                 {item}
//                 {index === items.length - 1 && <LearnMoreTypography />}{' '}
//               </Typography>
//             </li>
//           ))}
//         </Box>

//         {action && action}
//       </Box>

//       <Card borderRadius={2}>
//         {img && (
//           <Box
//             sx={{
//               position: 'relative',
//               width: { xs: '100%', md: 1 },
//               cursor: 'pointer',
//               mt: { xs: 2, md: 0 },
//             }}
//           >
//             <Box
//               component="img"
//               src={img}
//               alt="Thumbnail"
//               sx={{
//                 width: '500px',
//                 height: '100%',
//                 objectFit: 'contain',
//                 display: 'block',
//               }}
//             />
//           </Box>
//         )}
//       </Card>
//     </Box>
//   );
// }

// import Box from '@mui/material/Box';
// import { Card } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

// import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

// export default function HelpCard({ title, description, items, style, action, img, sx, ...other }) {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         p: 5,
//         gap: 4,
//         borderRadius: 2,
//         display: 'flex',
//         height: { md: 1 },
//         position: 'relative',
//         pl: { xs: 3, md: 5 },
//         alignItems: 'center',
//         color: 'common.black',
//         backgroundColor: 'common.white',
//         textAlign: 'left', // ensure all text aligns left
//         flexDirection: { xs: 'column', md: 'row' },
//         ...sx,
//       }}
//       {...other}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flex: '1 1 auto',
//           flexDirection: 'column',
//           alignItems: 'flex-start', // align all content to the left
//         }}
//       >
//         <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
//           {title}
//         </Typography>

//         <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
//           {description}
//         </Typography>

//         <Box component="ul" sx={style} mb={2} p={1}>
//           {items.map((item, index) => (
//             <li key={index}>
//               <Typography variant="body2" fontWeight={400} color="#637381">
//                 {item}
//                 {index === items.length - 1 && <LearnMoreTypography />}
//               </Typography>
//             </li>
//           ))}
//         </Box>

//         {action && action}
//       </Box>

//       <Card borderRadius={2}>
//         {img && (
//           <Box
//             sx={{
//               position: 'relative',
//               width: { xs: '100%', md: 1 },
//               cursor: 'pointer',
//               mt: { xs: 2, md: 0 },
//             }}
//           >
//             <Box
//               component="img"
//               src={img}
//               alt="Thumbnail"
//               sx={{
//                 width: '500px',
//                 height: '100%',
//                 objectFit: 'contain',
//                 display: 'block',
//               }}
//             />
//           </Box>
//         )}
//       </Card>
//     </Box>
//   );
// }

import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { LearnMoreTypography } from '../learn-more-text/learn-more-text';

export default function HelpCard({ title, description, items, style, action, img, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 5,
        gap: 4,
        borderRadius: 2,
        display: 'flex',
        height: { lg: 1 },
        position: 'relative',
        pl: { xs: 3, lg: 5 },
        alignItems: 'flex-start',
        color: 'common.black',
        backgroundColor: 'common.white',
        textAlign: 'left',
        flexDirection: { xs: 'column', lg: 'row' }, // <- switch to row on laptop+
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: 'flex-start', // <- always left-align content
        }}
      >
        <Typography variant="h6" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', ...(action && { mb: 1 }) }}>
          {description}
        </Typography>

        <Box component="ul" sx={style} mb={2} p={1}>
          {items.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" fontWeight={400} color="#637381">
                {item}
                {index === items.length - 1 && <LearnMoreTypography />}
              </Typography>
            </li>
          ))}
        </Box>

        {action && action}
      </Box>

      {img && (
        <Card
          sx={{
            boxShadow: 'none',
            background: 'transparent',
            mt: { xs: 2, lg: 0 },
            alignSelf: { xs: 'flex-start', lg: 'center' }, // left-aligned on small, center on large
          }}
        >
          <Box
            component="img"
            src={img}
            alt="Thumbnail"
            sx={{
              width: { xs: '100%', sm: '400px', lg: '500px' },
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Card>
      )}
    </Box>
  );
}
