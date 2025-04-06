import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { _userAbout, _userPlans, _userPayment, _userInvoices, _userAddressBook } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

import { API } from './api';
import { TimeZone } from './time-zone';
import { ActivityLog } from './activity-log';
import { TeamMembers } from './team-members';
import { CreditsSummary } from './credits-summary';

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
  { value: 'TimeZone', label: 'Time Zone', icon: <Iconify icon="ic:round-vpn-key" width={24} /> },
];

// ----------------------------------------------------------------------

export function SettingsTabs() {
  const tabs = useTabs('general');

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

      {tabs.value === 'Activity Log' && <ActivityLog socialLinks={_userAbout.socialLinks} />}

      {tabs.value === 'Time Zone' && <TimeZone />}
    </>
  );
}
