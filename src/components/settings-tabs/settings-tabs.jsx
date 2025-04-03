import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { _userAbout, _userPlans, _userPayment, _userInvoices, _userAddressBook } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { API } from '../../sections/settings/components/api';
import { TimeZone } from '../../sections/settings/components/time-zone';
import { TeamMembers } from '../../sections/settings/components/team-members';
import { ActivityLog } from '../../sections/settings/components/activity-log';
import { CreditsSummary } from '../../sections/settings/components/credits-summary';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'Credits Summary',
    label: 'Credits Summary',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  { value: 'API', label: 'API', icon: <Iconify icon="solar:bill-list-bold" width={24} /> },
  {
    value: 'Team Members',
    label: 'Team Members',
    icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
  },
  {
    value: 'Activity Log ',
    label: 'Activity Log ',
    icon: <Iconify icon="solar:share-bold" width={24} />,
  },
  { value: 'TimeZone', label: 'Time Zone', icon: <Iconify icon="stash:globe-timezone-duotone" width={24} /> },
];

// ----------------------------------------------------------------------

export default function SettingsTabs() {
  const tabs = useTabs('Credits Summary'); // Ensure the default value matches one of the TABS values

  if (!tabs.value) {
    console.error('tabs.value is undefined');
    return null; // Prevent rendering if tabs.value is invalid
  }

  return (
  <>

      <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {tabs.value === 'Credits Summary' && <CreditsSummary />}
      {tabs.value === 'API' && (
        <API
          plans={_userPlans}
          cards={_userPayment}
          invoices={_userInvoices}
          addressBook={_userAddressBook}
        />
      )}
      {tabs.value === 'Team Members' && <TeamMembers />}
      {tabs.value === 'Activity Log ' && <ActivityLog socialLinks={_userAbout.socialLinks} />}
      {tabs.value === 'TimeZone' && <TimeZone />}
      </>
  );
}
