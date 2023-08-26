'use client';

import Link from 'next/link';
import {getLocalStorage, setLocalStorage} from '@/lib/storageHelper';
import {useState, useEffect} from 'react';

import {StyledCookieBanner, SubTitle} from './styles';
import {Button, TitleModifyre} from '@/app/[lang]/styles';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    <StyledCookieBanner>
      <SubTitle>
        <Link href="/info/cookies">
          <p>
            We use <TitleModifyre>cookies</TitleModifyre> on our site.
          </p>
        </Link>
      </SubTitle>

      <div>
        <Button type="ghost" onClick={() => setCookieConsent(false)}>
          Decline
        </Button>
        <Button type="secondary" onClick={() => setCookieConsent(true)}>
          Allow Cookies
        </Button>
      </div>
    </StyledCookieBanner>
  );
}
