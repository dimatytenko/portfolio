import React from 'react';
import {Sling as Hamburger} from 'hamburger-react';

import {Container, DesktopWrapper, MobileWrapper} from '@/app/styles';
import {
  StyledHeader,
  HeaderContent,
  Logo,
  LogoIcon,
  Nav,
  NavList,
  Menu,
} from './styles';
import {PATHS} from '@/constants/common';
import {NavigationItems} from '@/components/NavigationItems';

interface IHeaderProps {
  toggleDrawer: () => void;
  onCloseDrawer: () => void;
}

export const Header: React.FC<IHeaderProps> = ({
  toggleDrawer,
  onCloseDrawer,
}) => {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo href={PATHS.HOME} onClick={onCloseDrawer}>
            <LogoIcon />
          </Logo>
          <DesktopWrapper>
            <Nav>
              <NavList>
                <NavigationItems />
              </NavList>
            </Nav>
          </DesktopWrapper>
          <MobileWrapper>
            <Menu onClick={toggleDrawer}>
              <Hamburger />
            </Menu>
          </MobileWrapper>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};
