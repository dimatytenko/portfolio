'use client';

import Link from 'next/link';
import {getLocalStorage, setLocalStorage} from '@/lib/storageHelper';
import {useState, useEffect} from 'react';

import {StyledCookieBanner, SubTitle, ButtonsWrapper} from './styles';
import {ButtonTypeButton, TitleModifyre} from '@/app/[lang]/styles';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>();

  useEffect(() => {
    const cookieConsent = getLocalStorage('cookie_consent');
    if (cookieConsent === undefined) {
      setCookieConsent(null);
      return;
    }
    setCookieConsent(cookieConsent);
  }, []);

  useEffect(() => {
    if (typeof cookieConsent !== 'boolean') return;
    window.gtag('consent', 'update', {
      analytics_storage: cookieConsent ? 'granted' : 'denied',
    });
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  if (cookieConsent !== null) {
    return null;
  }

  return (
    <StyledCookieBanner>
      <SubTitle>
        <Link href="/info/cookies">
          <p>
            We use <TitleModifyre>cookies</TitleModifyre> on our site.
          </p>
        </Link>
      </SubTitle>

      <ButtonsWrapper>
        <ButtonTypeButton
          type="ghost"
          size="small"
          onClick={() => setCookieConsent(true)}
          aria-label="Decline">
          Decline
        </ButtonTypeButton>
        <ButtonTypeButton
          type="secondary"
          size="small"
          onClick={() => setCookieConsent(true)}
          aria-label="Allow Cookies">
          Allow Cookies
        </ButtonTypeButton>
      </ButtonsWrapper>
    </StyledCookieBanner>
  );
}
