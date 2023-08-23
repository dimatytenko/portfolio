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
import {TDictionary} from '@/types/locale';
import {Locale} from '@/i18n-config';

interface IProjectProps {
  project: TProject;
  dictionary: TDictionary;
  lang: Locale;
}

export const Project: React.FC<IProjectProps> = ({
  project,
  dictionary,
  lang,
}) => {
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
          <ProjectDescription>{project.description[lang]}</ProjectDescription>
          <ProjectTag>{dictionary['projects'].technologies}:</ProjectTag>
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
                <ProjectTag>{dictionary['projects'].team}:</ProjectTag>
                <ProjectDescription>
                  {project.countTeam} {dictionary['projects'].developers}
                </ProjectDescription>
              </ProjectTeamWrapper>
              <ProjectTeamWrapper>
                <ProjectTag>{dictionary['projects'].role}:</ProjectTag>
                <ProjectDescription>{project.role}</ProjectDescription>
              </ProjectTeamWrapper>
            </>
          )}
        </ProjectInfo>
      </ProjectContent>
      <ProjectButtons>
        <Button href={project.linkDemo}>{dictionary['projects'].demo}</Button>
        <Button href={project.linkGithub} type={'secondary'}>
          {dictionary['projects'].repo}
        </Button>
      </ProjectButtons>
    </ProjectWrapper>
  );
};
