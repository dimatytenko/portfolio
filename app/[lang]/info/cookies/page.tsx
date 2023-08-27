import React from 'react';

import {Container, TitleModifyre} from '@/app/[lang]/styles';
import {getDictionary} from '@/get-dictionary';
import {Locale} from '@/i18n-config';
import {i18n} from '@/i18n-config';
import {CookiesPage, CookiesPageContent, Title, SubTitle, Text} from './styles';
import {LINKS} from '@/constants/common';
import {Metadata} from 'next/types';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function Cookies({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <CookiesPage>
      <Container>
        <CookiesPageContent>
          <Title>{dictionary['cookies'].title}</Title>
          <Text>{dictionary['cookies'].use}</Text>
          <SubTitle>{dictionary['cookies'].noteTitle}</SubTitle>
          <Text>{dictionary['cookies'].note}</Text>
          <SubTitle>{dictionary['cookies'].moreTitle}</SubTitle>
          <Text>
            {dictionary['cookies'].more}{' '}
            <a href={LINKS.COOKIES} target="_blank">
              <TitleModifyre>{dictionary['cookies'].link}</TitleModifyre>
            </a>
            .
          </Text>
        </CookiesPageContent>
      </Container>
    </CookiesPage>
  );
}

export async function generateMetadata({
  params: {lang},
}: {
  params: {lang: Locale};
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary['meta'].titleCookies,
    description: dictionary['meta'].descriptionCookies,
  };
}
