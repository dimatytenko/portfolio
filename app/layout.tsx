import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import 'modern-normalize';

import './globals.css';
import {RootStyleRegistry} from './rootStyleRegistry';
import {ThemeWrapper} from './themeWrapper';
import {Wrapper, StyledBody, StyledMain, Container} from './styles';
import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600', '700']});

export const metadata: Metadata = {
  title: 'Web developer portfolio',
  description: 'Portfolio web developer from Sumy, Ukraine',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <RootStyleRegistry>
          <StyledBody className={poppins.className}>
            <Wrapper>
              <Header />
              <StyledMain>
                <Container>{children}</Container>
              </StyledMain>
              <Footer />
            </Wrapper>
          </StyledBody>
        </RootStyleRegistry>
      </ThemeWrapper>
    </html>
  );
}
