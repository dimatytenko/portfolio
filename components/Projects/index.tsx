import React from 'react';

import {Project} from './Project';
import {ProjectsWrapper} from './styles';
import {TProjects} from '@/types/projects';
import {TDictionary} from '@/types/locale';
import {Locale} from '@/i18n-config';


export interface IProjectsListProps {
  projects: TProjects;
  dictionary: TDictionary;
  lang: Locale;
}

export const ProjectsList: React.FC<IProjectsListProps> = ({
  projects,
  dictionary,
  lang,
}) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Project
          key={project.title}
          project={project}
          dictionary={dictionary}
          lang={lang}
        />
      ))}
    </ProjectsWrapper>
  );
};
