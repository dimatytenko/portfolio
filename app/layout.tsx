'use client';

import {Poppins} from 'next/font/google';
import 'modern-normalize';
import 'rc-drawer/assets/index.css';

import './globals.css';
import {RootStyleRegistry} from './rootStyleRegistry';
import {ThemeWrapper} from './themeWrapper';
import {Wrapper, StyledBody, StyledMain} from './styles';
import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';
import {Drawer} from '@/components/Drawer';
import {useDrawer} from '@/hooks/useDrawer';
import {ButtonToTop} from '@/components/ButtonScrollToTop';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600', '700']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  const {isOpen, toggleDrawer, closeHandler} = useDrawer();

  return (
    <html lang="en">
      <ThemeWrapper>
        <RootStyleRegistry>
          <StyledBody className={poppins.className}>
            <Wrapper>
              <Header
                isOpen={isOpen}
                toggleDrawer={toggleDrawer}
                onCloseDrawer={closeHandler}
              />
              <StyledMain>{children}</StyledMain>
              <Footer />
            </Wrapper>

            <ButtonToTop />
            <Drawer
              onClickItem={closeHandler}
              open={isOpen}
              onClose={toggleDrawer}
              width={'100%'}
              placement={'right'}
            />
          </StyledBody>
        </RootStyleRegistry>
      </ThemeWrapper>
    </html>
  );
}
