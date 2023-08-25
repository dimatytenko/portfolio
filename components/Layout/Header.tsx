'use client';

import React from 'react';
import {Sling as Hamburger} from 'hamburger-react';

import {Container, DesktopWrapper, MobileWrapper} from '@/app/[lang]/styles';
import {
  StyledHeader,
  HeaderContent,
  Logo,
  LogoIcon,
  Nav,
  NavList,
  Menu,
  ElementsWrapper,
} from './styles';
import {getPath} from '@/constants/common';
import {NavigationItems} from '@/components/NavigationItems';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import {TDictionary} from '@/types/locale';
import {Locale} from '@/i18n-config';

interface IHeaderProps {
  toggleDrawer: () => void;
  onCloseDrawer: () => void;
  isOpen: boolean;
  dictionary: TDictionary;
  lang: Locale;
}

export const Header: React.FC<IHeaderProps> = ({
  isOpen,
  toggleDrawer,
  onCloseDrawer,
  dictionary,
  lang,
}) => {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo href={getPath.home(lang)} onClick={onCloseDrawer}>
            <LogoIcon />
          </Logo>
          <DesktopWrapper>
            <ElementsWrapper>
              <Nav>
                <NavList>
                  <NavigationItems dictionary={dictionary} lang={lang} />
                </NavList>
              </Nav>
              <LocaleSwitcher />
            </ElementsWrapper>
          </DesktopWrapper>
          <MobileWrapper>
            <Menu onClick={toggleDrawer}>
              <Hamburger toggled={isOpen} />
            </Menu>
          </MobileWrapper>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};
