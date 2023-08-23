'use client';

import React from 'react';

import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';
import {Drawer} from '@/components/Drawer';
import {ButtonToTop} from '@/components/ButtonScrollToTop';
import {Wrapper, StyledMain} from './styles';
import {TDictionary} from '@/types/locale';
import {useDrawer} from '@/hooks/useDrawer';
import {Locale} from '@/i18n-config';

interface ILayoutProps {
  dictionary: TDictionary;
  children: React.ReactNode;
  lang: Locale;
}

export const Layout: React.FC<ILayoutProps> = ({
  dictionary,
  lang,
  children,
}) => {
  const {isOpen, toggleDrawer, closeHandler} = useDrawer();

  return (
    <Wrapper>
      <Header
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        onCloseDrawer={closeHandler}
        dictionary={dictionary}
        lang={lang}
      />
      <StyledMain>{children}</StyledMain>
      <Footer dictionary={dictionary} />
      <ButtonToTop />
      <Drawer
        onClickItem={closeHandler}
        open={isOpen}
        onClose={toggleDrawer}
        width={'100%'}
        placement={'right'}
        dictionary={dictionary}
        lang={lang}
      />
    </Wrapper>
  );
};
