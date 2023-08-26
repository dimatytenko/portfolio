'use client';

import React from 'react';
import {NextFont} from 'next/dist/compiled/@next/font';
import {usePathname} from 'next/navigation';
import {Suspense} from 'react';

import {StyledBody} from '@/app/[lang]/styles';
import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';
import {Drawer} from '@/components/Drawer';
import {ButtonToTop} from '@/components/ButtonScrollToTop';
import {Wrapper, StyledMain} from './styles';
import {TDictionary} from '@/types/locale';
import {useDrawer} from '@/hooks/useDrawer';
import {Locale} from '@/i18n-config';
import {Paths} from '@/constants/common';
import Analytics from '@/components/Analytics';

interface ILayoutProps {
  font: NextFont;
  dictionary: TDictionary;
  children: React.ReactNode;
  lang: Locale;
}

export const Layout: React.FC<ILayoutProps> = ({
  font,
  dictionary,
  lang,
  children,
}) => {
  const {isOpen, toggleDrawer, closeHandler} = useDrawer();
  const pathname = usePathname();

  return (
    <StyledBody className={font.className}>
      <Suspense>
        <Analytics />;
      </Suspense>
      <Wrapper
        $isNotFound={!Paths.includes(pathname.split('/').slice(2).join('/'))}>
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
    </StyledBody>
  );
};
