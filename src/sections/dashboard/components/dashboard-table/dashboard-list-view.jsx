// import { useState } from 'react';

// import {
//   Box,
//   Tab,
//   Card,
//   Tabs,
//   Table,
//   Button,
//   TableRow,
//   Checkbox,
//   TableBody,
//   TableCell,
//   TableHead,
//   TextField,
//   Typography,
//   IconButton,
//   TableContainer,
// } from '@mui/material';

// import { Label } from 'src/components/label';
// import { Iconify } from 'src/components/iconify';

// const STATUS_TABS = [
//   { value: 'all', label: 'All', count: 5, color: 'black', textColor: 'white' },
//   { value: 'verified', label: 'Verified', count: 1, color: '#D1FADF', textColor: '#027A48' },
//   { value: 'processing', label: 'Processing', count: 1, color: '#D1E9FF', textColor: '#175CD3' },
//   { value: 'uploading', label: 'Uploading', count: 1, color: '#FEF0C7', textColor: '#DC6803' },
//   { value: 'unverified', label: 'Unverified', count: 2, color: '#FECDCA', textColor: '#D92D20' },
// ];

// const TABLE_DATA = [
//   {
//     id: 1,
//     status: 'Uploading',
//     name: 'List 1',
//     date: 'Oct 23, 2024 17:45:32',
//     emails: 128,
//     action: 'Uploading',
//   },
//   {
//     id: 2,
//     status: 'Unverified',
//     name: 'List 2',
//     date: 'Oct 23, 2024 17:45:32',
//     emails: 65,
//     action: 'Start Verification',
//   },
//   {
//     id: 3,
//     status: 'Unverified',
//     name: 'List 3',
//     date: 'Oct 23, 2024 17:45:32',
//     emails: 250,
//     action: 'Start Verification',
//   },
//   {
//     id: 4,
//     status: 'Processing',
//     name: 'List 4',
//     date: 'Oct 23, 2024 17:45:32',
//     emails: 65,
//     action: 'Verification In Progress',
//     credit: '65 Credit Consumed',
//   },
//   {
//     id: 5,
//     status: 'Verified',
//     name: 'List 5',
//     date: 'Oct 23, 2024 17:45:32',
//     emails: 653343,
//     action: 'Download Report',
//     credit: '653343 Credit Consumed',
//   },
// ];

// export default function DashboardListView() {
//   const [selectedTab, setSelectedTab] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredData = TABLE_DATA.filter(
//     (row) =>
//       (selectedTab === 'all' || row.status.toLowerCase() === selectedTab) &&
//       row.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Card>
//       <Box p={2} justifyContent="space-between" alignItems="center">
//         <Typography variant="h5">Home</Typography>
//         <Typography variant="body2" color="textSecondary">
//           Verify and manage all your uploaded email lists here.
//         </Typography>
//       </Box>
//       <Box p={2} display="flex" alignItems="center" gap={1} width="100%">
//         <TextField
//           variant="outlined"
//           size="small"
//           fullWidth
//           placeholder="Search by email list name..."
//           InputProps={{
//             sx: { height: 54 },
//           }}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <IconButton>
//           <Iconify icon="mdi:dots-vertical" />
//         </IconButton>
//       </Box>

//       <Box p={2}>
//         <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
//           {STATUS_TABS.map((tab) => (
//             <Tab
//               key={tab.value}
//               value={tab.value}
//               label={
//                 <Box display="flex" alignItems="center" gap={1}>
//                   {tab.label}
//                   <Label
//                     sx={{
//                       backgroundColor: tab.color,
//                       color: tab.textColor,
//                       borderRadius: '8px',
//                       padding: '2px 6px',
//                     }}
//                   >
//                     {tab.count}
//                   </Label>
//                 </Box>
//               }
//             />
//           ))}
//         </Tabs>
//       </Box>

//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <Checkbox />
//               </TableCell>
//               <TableCell width={305}>Status/Name/Date</TableCell>
//               <TableCell width={316}>Number of Emails/Credits Consumed</TableCell>
//               <TableCell width={227} align="right">Action</TableCell>
//               <TableCell align="right" />
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.map((row) => (
//               <TableRow key={row.id} sx={{ '&:hover': { backgroundColor: '#919eab14' } }}>
//                 <TableCell>
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell>
//                   <Label
//                     color={
//                       row.status === 'Unverified'
//                         ? 'error'
//                         : row.status === 'Processing'
//                           ? 'info'
//                           : 'success'
//                     }
//                   >
//                     {row.status}
//                   </Label>
//                   <Typography>{row.name}</Typography>
//                   <Typography variant="caption" color="textSecondary">
//                     {row.date}
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   {`Contains ${row.emails} Emails`}
//                   {row.credit && (
//                     <Typography sx={{ color: '#22c55e', fontSize: '12px' }}>
//                       {row.credit}
//                     </Typography>
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button color="primary" size="medium" variant="outlined">
//                     {row.action}
//                   </Button>
//                 </TableCell>
//                 <TableCell >
//                   <IconButton align='left'>
//                     <Iconify icon="mdi:dots-vertical" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Card>
//   );
// }

import { useState } from 'react';

import {
  Box,
  Tab,
  Card,
  Tabs,
  Table,
  Button,
  Tooltip,
  TableRow,
  Checkbox,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
  IconButton,
  TableContainer,
} from '@mui/material';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

const STATUS_TABS = [
  { value: 'all', label: 'All', count: 5, color: 'black', textColor: 'white' },
  { value: 'verified', label: 'Verified', count: 1, color: '#D1FADF', textColor: '#027A48' },
  { value: 'processing', label: 'Processing', count: 1, color: '#D1E9FF', textColor: '#175CD3' },
  { value: 'uploading', label: 'Uploading', count: 1, color: '#FEF0C7', textColor: '#DC6803' },
  { value: 'unverified', label: 'Unverified', count: 2, color: '#FECDCA', textColor: '#D92D20' },
];

const TABLE_DATA = [
  {
    id: 1,
    status: 'Uploading',
    name: 'List 1',
    date: 'Oct 23, 2024 17:45:32',
    emails: 128,
    action: 'Uploading',
  },
  {
    id: 2,
    status: 'Unverified',
    name: 'List 2',
    date: 'Oct 23, 2024 17:45:32',
    emails: 65,
    action: 'Start Verification',
  },
  {
    id: 3,
    status: 'Unverified',
    name: 'List 3',
    date: 'Oct 23, 2024 17:45:32',
    emails: 250,
    action: 'Start Verification',
  },
  {
    id: 4,
    status: 'Processing',
    name: 'List 4',
    date: 'Oct 23, 2024 17:45:32',
    emails: 65,
    action: 'Verification In Progress',
    credit: '65 Credit Consumed',
  },
  {
    id: 5,
    status: 'Verified',
    name: 'List 5',
    date: 'Oct 23, 2024 17:45:32',
    emails: 653343,
    action: 'Download Report',
    credit: '653343 Credit Consumed',
  },
];

export default function DashboardListView() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = TABLE_DATA.filter(
    (row) =>
      (selectedTab === 'all' || row.status.toLowerCase() === selectedTab) &&
      row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h5">Home</Typography>

        <Typography variant="body2" color="textSecondary">
          Verify and manage all your uploaded email lists here.
        </Typography>
      </Box>

      <Box p={2} display="flex" alignItems="center" gap={1} width="100%">
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Search by email list name..."
          InputProps={{
            sx: { height: 54 },
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Tooltip title="More options" arrow placement="top">
          <IconButton color="primary">
            <Iconify icon="mynaui:refresh" />
            
          </IconButton>
        </Tooltip>
      </Box>

      <Box p={2}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          {STATUS_TABS.map((tab) => {
            const tabLabel = (
              <Box display="flex" alignItems="center" gap={1}>
                {tab.label}
                <Label
                  sx={{
                    backgroundColor: tab.color,
                    color: tab.textColor,
                    borderRadius: '8px',
                    padding: '2px 6px',
                  }}
                >
                  {tab.count}
                </Label>
              </Box>
            );

            return tab.value === 'all' ? (
              <Tab key={tab.value} value={tab.value} label={tabLabel} />
            ) : (
              <Tooltip key={tab.value} title={`Filter by ${tab.label}`} arrow placement="top">
                <Tab value={tab.value} label={tabLabel} />
              </Tooltip>
            );
          })}
        </Tabs>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell width={305}>
                <Tooltip title="Shows the status, name, and uploaded date" arrow placement="top">
                  <span>Status / Name / Date</span>
                </Tooltip>
              </TableCell>
              <TableCell width={316}>
                <Tooltip title="Total emails and credits used" arrow placement="top">
                  <span>Number of Emails / Credits Consumed</span>
                </Tooltip>
              </TableCell>
              <TableCell width={227} align="right">
                <Tooltip title="Actions available for this list" arrow placement="top">
                  <span>Action</span>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <Tooltip title="More actions" arrow placement="top">
                  <span />
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id} sx={{ '&:hover': { backgroundColor: '#919eab14' } }}>
                <TableCell>
                  <Checkbox />
                </TableCell>

                <TableCell>
                  <Tooltip title={`Status: ${row.status}`} arrow placement="top-start">
                    <Label
                      color={
                        row.status === 'Unverified'
                          ? 'error'
                          : row.status === 'Processing'
                            ? 'info'
                            : 'success'
                      }
                    >
                      {row.status}
                    </Label>
                  </Tooltip>
                  <Tooltip title={`List Name: ${row.name}`} arrow placement="top-start">
                    <Typography>{row.name}</Typography>
                  </Tooltip>
                  <Tooltip title={`Uploaded on: ${row.date}`} arrow placement="top-start">
                    <Typography variant="caption" color="textSecondary">
                      {row.date}
                    </Typography>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  <Tooltip
                    title={`Total emails in this list: ${row.emails}`}
                    arrow
                    placement="top-start"
                  >
                    <Typography>{`Contains ${row.emails} Emails`}</Typography>
                  </Tooltip>
                  {row.credit && (
                    <Tooltip title={`Credits consumed: ${row.credit}`} arrow placement="top-start">
                      <Typography sx={{ color: '#22c55e', fontSize: '12px' }}>
                        {row.credit}
                      </Typography>
                    </Tooltip>
                  )}
                </TableCell>

                <TableCell align="right">
                  <Tooltip title={`Click to ${row.action.toLowerCase()}`} arrow placement="top">
                    <Button color="primary" size="medium" variant="outlined">
                      {row.action}
                    </Button>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  <Tooltip title="Click to see more options" arrow placement="top">
                    <IconButton>
                      <Iconify icon="mdi:dots-vertical" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
