import {type} from 'os';

export type TProject = {
  imgSrc: string;
  title: string;
  description: {
    en: string;
    uk: string;
  };
  technology: string;
  technologies: string[];
  linkGithub: string;
  linkDemo: string;
  team?: boolean;
  countTeam?: number;
  role?: string;
};

export type TProjects = TProject[];
