import {type} from 'os';

export type TProject = {
  title: string;
  description: string;
  technology: string;
  technologies: string[];
  linkGithub: string;
  linkDemo: string;
  team: boolean;
  countTeam: number;
  role: string;
  imgSrc: string;
};

export type TProjects = TProject[];
