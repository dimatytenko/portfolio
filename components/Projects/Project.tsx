import React from 'react';
import Image from 'next/image';

import {
  ProjectWrapper,
  ProjectContent,
  ProjectImageWrapper,
  ProjectTitle,
  ProjectInfo,
  TechnologiesWrapper,
  ProjectTeamWrapper,
  ProjectTag,
  ProjectDescription,
  ProjectButtons,
} from './styles';
import {Button, Devider} from '@/app/styles';
import {TProject} from '@/types/projects';

interface IProjectProps {
  project: TProject;
}

export const Project: React.FC<IProjectProps> = ({project}) => {
  return (
    <ProjectWrapper>
      <ProjectImageWrapper>
        <Image
          src={project.imgSrc}
          alt={project.title}
          width={500}
          height={266}
          priority={true}
        />
      </ProjectImageWrapper>
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <Devider />
        <ProjectInfo>
          <ProjectTag>{project.technology}</ProjectTag>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectTag>Technologies:</ProjectTag>
          <TechnologiesWrapper>
            {project.technologies.map((tech, i) => (
              <ProjectDescription key={tech}>
                {tech}
                {i === project.technologies.length - 1 ? ';' : ','}
              </ProjectDescription>
            ))}
          </TechnologiesWrapper>
          {project.team && (
            <>
              <ProjectTeamWrapper>
                <ProjectTag>Team:</ProjectTag>
                <ProjectDescription>
                  {project.countTeam} developers
                </ProjectDescription>
              </ProjectTeamWrapper>
              <ProjectTeamWrapper>
                <ProjectTag>Role:</ProjectTag>
                <ProjectDescription>{project.role}</ProjectDescription>
              </ProjectTeamWrapper>
            </>
          )}
        </ProjectInfo>
      </ProjectContent>
      <ProjectButtons>
        <Button href={project.linkDemo}>demo</Button>
        <Button href={project.linkGithub} type={'secondary'}>
          repo
        </Button>
      </ProjectButtons>
    </ProjectWrapper>
  );
};
