import { Iconify } from 'src/components/iconify';

export const TABS = [
  {
    value: 'Credits Summary',
    label: 'Credits Summary',
    icon: <Iconify icon="clarity:rack-server-solid" width={20} />,
  },
  {
    value: 'API',
    label: 'API',
    icon: <Iconify icon="pajamas:api" width={24} />,
  },
  {
    value: 'Team Members',
    label: 'Team Members',
    icon: <Iconify icon="fluent:people-team-16-filled" width={24} />,
  },
  {
    value: 'Activity Log',
    label: 'Activity Log',
    icon: <Iconify icon="material-symbols-light:lock-clock-rounded" width={24} />,
  },
  {
    value: 'Time Zone',
    label: 'Time Zone',
    icon: <Iconify icon="stash:globe-timezone" width={24} />,
  },
];
