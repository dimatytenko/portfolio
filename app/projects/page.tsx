import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next';

import {ProjectsList} from '@/components/Projects';
import {Container} from '@/app/styles';
import {ProjectPage} from './styles';
import {projects} from '@/public/data/projects';

export const metadata = {
  title: 'Portfolio | Projects',
  description: 'List of the web projects',
};

export default function Projects() {
  return (
    <ProjectPage>
      <Container>
        <ProjectsList projects={projects} />
      </Container>
    </ProjectPage>
  );
}
