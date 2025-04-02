import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const Dashboard = lazy(() => import('src/pages/app/dashboard'));
const Inbox = lazy(() => import('src/pages/app/inbox'));
const GetHelp = lazy(() => import('src/pages/app/get-help'));

const CreditsSummary = lazy(() => import('src/pages/app/credits-summary'));
const API = lazy(() => import('src/pages/app/api'));
const TeamMembers = lazy(() => import('src/pages/app/team-members'));
const ActivityLog = lazy(() => import('src/pages/app/activity-log'));
const TimeZone = lazy(() => import('src/pages/app/time-zone'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <Dashboard />, index: true },
      { path: 'inbox', element: <Inbox /> },
      { path: 'get-help', element: <GetHelp /> },
      {
        path: 'settings',
        children: [
          { element: <CreditsSummary />, index: true },
          { path: 'api', element: <API /> },
          { path: 'team-members', element: <TeamMembers /> },
          { path: 'activity-log', element: <ActivityLog /> },
          { path: 'time-zone', element: <TimeZone /> },
        ],
      },
    ],
  },
];
