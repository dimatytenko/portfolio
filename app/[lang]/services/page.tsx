import type {Metadata} from 'next';

import {Container} from '@/app/[lang]/styles';
import {ServicePage, ServiceContent} from './styles';
import {Service} from '@/components/Service';
import {services} from '@/public/data/services';
import {getDictionary} from '@/get-dictionary';
import {Locale} from '@/i18n-config';
import {i18n} from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function Services({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <ServicePage>
      <Container>
        <ServiceContent>
          {services.map((service) => (
            <Service key={service.tag} data={service} dictionary={dictionary} />
          ))}
        </ServiceContent>
      </Container>
    </ServicePage>
  );
}

export async function generateMetadata({
  params: {lang},
}: {
  params: {lang: Locale};
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary['meta'].titleServices,
    description: dictionary['meta'].descriptionServices,
  };
}
