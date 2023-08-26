'use client';

import Script from 'next/script';
import {usePathname, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';
import {pageview} from '@/lib/gtagHelper';

import {GA_ID} from '@/lib/gtagHelper';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (GA_ID) {
      const url = pathname + searchParams.toString();

      pageview(GA_ID, url);
    }
  }, [pathname, searchParams, GA_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
