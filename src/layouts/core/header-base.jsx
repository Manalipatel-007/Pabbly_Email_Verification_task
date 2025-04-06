import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { HeaderSection } from './header-section';
import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { SignInButton } from '../components/sign-in-button';
import { AccountDrawer } from '../components/account-drawer';
import { ContactsPopover } from '../components/contacts-popover';

// ----------------------------------------------------------------------

const StyledDivider = styled('span')(({ theme }) => ({
  width: 1,
  height: 10,
  flexShrink: 0,
  display: 'none',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(2.5),
  backgroundColor: 'currentColor',
  color: theme.vars.palette.divider,
  '&::before, &::after': {
    top: -5,
    width: 3,
    height: 3,
    content: '""',
    flexShrink: 0,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
  },
  '&::after': { bottom: -5, top: 'auto' },
}));

// ----------------------------------------------------------------------

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  onOpenNav,
  layoutQuery,

  slotsDisplay: {
    signIn = true,
    account = true,
    helpLink = true,
    purchase = true,
    contacts = true,
    searchbar = true,
    workspaces = true,
    menuButton = true,
    localization = true,
  } = {},

  ...other
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeaderSection
      sx={{
        backgroundColor: 'common.white',
        borderBottom: '1px dashed',
        borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.3),
        ...sx,
      }}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {/* Menu button */}
            {menuButton && (
              <MenuButton
                data-slot="menu-button"
                onClick={onOpenNav}
                sx={{
                  mr: 1,
                  ml: -1,
                  [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                }}
              />
            )}

            {/* Desktop Logo */}
            {/* {!isMobile && <Logo data-slot="logo" />} */}

            {!isMobile && (
              <Box
                component="img"
                src="/logo/PEV_LOGO.svg"
                alt="PEV Logo"
                sx={{ height: 40, width: 'auto', mr: 2 }}
              />
            )}

            {/* Mobile Logo */}
            {isMobile && (
              <Box
                component="img"
                src="/logo/pabbly_logo-icon.svg"
                alt="Pabbly Logo"
                sx={{ height: 40, width: 'auto', mr: 2 }}
              />
            )}

            {/* Divider (optional, hidden by default) */}
            <StyledDivider data-slot="divider" />

            {slots?.leftAreaEnd}
          </>
        ),
        rightArea: (
          <>
            {slots?.rightAreaStart}

            <Box
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 2, sm: 1.5 },
              }}
            >
              {/* Help link */}
              {helpLink && (
                <Link
                  data-slot="help-link"
                  href={paths.faqs}
                  component={RouterLink}
                  color="inherit"
                  sx={{ typography: 'subtitle2' }}
                >
                  Need help?
                </Link>
              )}

              {/* Searchbar */}
              {searchbar && (
                <Tooltip title="Search through your email lists" arrow placement="bottom">
                  <Box>
                    <Searchbar
                      data-slot="searchbar"
                      data={data?.nav}
                      placeholder={isMobile ? '' : 'Search folder'}
                    />
                  </Box>
                </Tooltip>
              )}

              {/* Upgrade Button */}
              <Tooltip title="Click to upgrade your plan" arrow placement="bottom">
                <Button
                  data-slot="upgrade"
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgb(255, 86, 48)',
                    color: 'white',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: 'rgb(230, 76, 42)',
                    },
                  }}
                >
                  Upgrade
                </Button>
              </Tooltip>

              {/* Contacts popover */}
              {contacts && <ContactsPopover data-slot="contacts" data={data?.contacts} />}

              {/* Account drawer */}
              {account && <AccountDrawer data-slot="account" data={data?.account} />}

              {/* Sign in button */}
              {signIn && <SignInButton />}

              {/* Purchase button */}
              {purchase && (
                <Button
                  data-slot="purchase"
                  variant="contained"
                  rel="noopener"
                  target="_blank"
                  href={paths.minimalStore}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: {
                      display: 'inline-flex',
                    },
                  }}
                >
                  Purchase
                </Button>
              )}
            </Box>

            {slots?.rightAreaEnd}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}
