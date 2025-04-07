import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import {
  _userAbout,
  _userPlans,
  _userPayment,
  _userInvoices,
  _userAddressBook,
} from 'src/_mock';

import { API } from './api';
import { TimeZone } from './time-zone';
import { TeamMembers } from './team-members';
import { ActivityLog } from './activity-log';
import { TABS } from './tabs-config/tabs-config';
import { CreditsSummary } from './credits-summary';

export function SettingsTabs() {
  const tabs = useTabs('Credits Summary'); // Default active tab

  return (
    <>
      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        sx={{ mb: { xs: 3, md: 5 } }}
        variant="scrollable"
        scrollButtons="auto"
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            value={tab.value}
          />
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

      {tabs.value === 'Activity Log' && (
        <ActivityLog socialLinks={_userAbout?.socialLinks ?? []} />
      )}

      {tabs.value === 'Time Zone' && <TimeZone />}
    </>
  );
}

