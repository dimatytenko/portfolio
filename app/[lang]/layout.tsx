import {Poppins} from 'next/font/google';
import 'modern-normalize';
import 'rc-drawer/assets/index.css';
import type {Metadata} from 'next';

import '@/app/globals.css';
import {RootStyleRegistry} from '@/app/rootStyleRegistry';
import {ThemeWrapper} from '@/app/themeWrapper';

import {i18n} from '@/i18n-config';
import {Locale} from '@/i18n-config';
import {getDictionary} from '@/get-dictionary';
import {Layout} from '@/components/Layout';
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics';
import {GA_MEASUREMENT_ID} from '@/constants/common';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600', '700']});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function RootLayout({
  children,
  params: {lang},
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      {/* connection Search Console */}
      <meta
        name="google-site-verification"
        content="SSU-yyXlydZ6CU4gAJSn-zhdB2X_JVXU0MoBwhztF1g"
      />
      <meta name="freelancehunt" content="f22b9f5ab098322" />
      <meta
        name="google-site-verification"
        content="SSU-yyXlydZ6CU4gAJSn-zhdB2X_JVXU0MoBwhztF1g"
      />
      <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      <ThemeWrapper>
        <RootStyleRegistry>
          <Layout font={poppins} dictionary={dictionary} lang={lang}>
            {children}
          </Layout>
        </RootStyleRegistry>
      </ThemeWrapper>
    </html>
  );
}

export const metadata: Metadata = {
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    // shortcut: ['/apple-touch-icon.png'],
  },
  // manifest: '/manifest',
};
