import React from 'react';

import {Project} from './Project';
import {ProjectsWrapper} from './styles';
import {TProjects} from '@/types/projects';

export interface IProjectsListProps {
  projects: TProjects;
}

export const ProjectsList: React.FC<IProjectsListProps> = ({projects}) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </ProjectsWrapper>
  );
};
