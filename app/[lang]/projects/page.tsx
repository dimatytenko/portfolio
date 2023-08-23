import type {Metadata} from 'next';

import {ProjectsList} from '@/components/Projects';
import {Container} from '@/app/styles';
import {ProjectPage} from './styles';
import {projects} from '@/public/data/projects';
import {getDictionary} from '@/get-dictionary';
import {Locale} from '@/i18n-config';
import {i18n} from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function Projects({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <ProjectPage>
      <Container>
        <ProjectsList projects={projects} dictionary={dictionary} lang={lang} />
      </Container>
    </ProjectPage>
  );
}

export async function generateMetadata({
  params: {lang},
}: {
  params: {lang: Locale};
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary['meta'].titleProjects,
    description: dictionary['meta'].descriptionProjects,
  };
}
