import React from 'react';

import {Project} from './Project';
import {ProjectsWrapper} from './styles';
import {TProjects} from '@/types/projects';

// const projects = [
//   {
//     imgSrc: '/img/projects/image_1.jpg',
//     title: 'Project 1',
//     description:
//       'lorem ipsum dolor sit ametsit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     technology: 'Technology 1',
//     technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
//     linkGithub: 'https://google.com',
//     linkDemo: 'https://google.com',
//     team: true,
//     countTeam: 8,
//     role: 'Developer',
//   },
// ];

export interface IProjectsListProps {
  projects: TProjects;
}

export const ProjectsList: React.FC<IProjectsListProps> = ({projects}) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <Project
          key={project.title}
          project={project}
          // title={proj.title}
          // description={proj.description}
          // technology={proj.technology}
          // technologies={proj.technologies}
          // linkGithub={proj.linkGithub}
          // linkDemo={proj.linkDemo}
          // team={proj.team}
          // countTeam={proj.countTeam}
          // role={proj.role}
          // imgSrc={proj.imgSrc}
        />
      ))}
    </ProjectsWrapper>
  );
};
