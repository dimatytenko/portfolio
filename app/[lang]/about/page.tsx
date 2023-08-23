import type {Metadata} from 'next';

import {Container} from '@/app/styles';
import {AboutPage, AboutContent, AvatarWrapper} from './styles';
import {Avatar} from '@/components/Avatar';
import {AboutComponent} from '@/components/About';
import {getDictionary} from '@/get-dictionary';
import {Locale} from '@/i18n-config';
import {i18n} from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function About({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <AboutPage>
      <Container>
        <AboutContent>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
          <AboutComponent dictionary={dictionary} />
        </AboutContent>
      </Container>
    </AboutPage>
  );
}

export const metadata: Metadata = {
  title: 'Portfolio | About',
  description: 'About me',
};
