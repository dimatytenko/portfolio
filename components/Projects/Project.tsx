import React from 'react';
import Image from 'next/image';

import {
  ProjectWrapper,
  ProjectContent,
  ProjectImageWrapper,
  ProjectTitle,
  ProjectDevider,
  ProjectInfo,
  TechnologiesWrapper,
  ProjectTeamWrapper,
  ProjectTag,
  ProjectDescription,
  ProjectButtons,
  Button,
} from '@/app/styles';
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
        <ProjectDevider />
        <ProjectInfo>
          <ProjectTag>{project.technology}</ProjectTag>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechnologiesWrapper>
            {project.technologies.map((tech) => (
              <ProjectDescription key={tech}>{tech}</ProjectDescription>
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
