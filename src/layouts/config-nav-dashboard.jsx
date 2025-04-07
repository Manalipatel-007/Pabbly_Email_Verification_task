import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  dashboard: icon('ic-dashboard'),
  inbox: icon('inbox'),
  contacts: icon('contacts'),
  teamQueue: icon('team-queue'),
  template: icon('template'),
  broadcast: icon('template'),
  flows: icon('flows'),
  settings: icon('ic-settings'),
  getHelp: icon('ic-gethelp'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Overview 6.0.0',
    items: [{ title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard }],
  },

  {
    items: [
      {
        title: 'Settings',
        path: paths.dashboard.settings.root,
        icon: ICONS.settings,
        children: [
          { title: 'Credits Summary', path: paths.dashboard.settings.root },
          { title: 'API', path: paths.dashboard.settings.api },
          { title: 'Team Members', path: paths.dashboard.settings.teamMembers },
          { title: 'Activity Log', path: paths.dashboard.settings.activityLog },
          { title: 'Time Zone', path: paths.dashboard.settings.timeZone },
        ],
      },
    ],
  },

  /**
   * Management
   */
  {
    subheader: 'Overview 6.0.0',
    items: [{ title: 'Get Help', path: paths.dashboard.gethelp, icon: ICONS.getHelp }],
  },
];
