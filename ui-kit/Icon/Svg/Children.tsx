import React from 'react';

import {
  Github,
  Linkedin,
  ArrowFooter,
  Logo,
  CV,
  Decor1,
  Cursor,
  Toolbox,
  Check,
  Figma,
  HTML,
  CSS,
  SASS,
  Styled,
  Tailwind,
  Next,
  Node,
  TS,
  VSCode,
  Git,
  GitHub,
  Gitlab,
  ReactIcon,
  JS,
  Gatsby,
  Vue,
  Vercel,
  Netlify,
  Redux,
  Expo,
  Mui,
  Antd,
  Bootstrap,
  Express,
  Mongo,
  Mysql,
  Graphql,
  Apollo,
  StoryBook,
  Docker,
  Emotion,
  Recoil,
  Chakra,
  Zustand,
} from './Paths';
import {StyledSvgIconProps} from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type}) => {
  switch (type) {
    case 'github':
      return <Github />;
    case 'linkedin':
      return <Linkedin />;
    case 'arrowFooter':
      return <ArrowFooter />;
    case 'logo':
      return <Logo />;
    case 'cv':
      return <CV />;
    case 'decor1':
      return <Decor1 />;
    case 'cursor':
      return <Cursor />;
    case 'toolbox':
      return <Toolbox />;
    case 'check':
      return <Check />;
    case 'figma':
      return <Figma />;
    case 'html':
      return <HTML />;
    case 'css':
      return <CSS />;
    case 'sass':
      return <SASS />;
    case 'styled-components':
      return <Styled />;
    case 'tailwind':
      return <Tailwind />;
    case 'next':
      return <Next />;
    case 'node':
      return <Node />;
    case 'typescript':
      return <TS />;
    case 'vscode':
      return <VSCode />;
    case 'git':
      return <Git />;
    case 'git-hub':
      return <GitHub />;
    case 'gitlab':
      return <Gitlab />;
    case 'react':
      return <ReactIcon />;
    case 'js':
      return <JS />;
    case 'gatsby':
      return <Gatsby />;
    case 'vue':
      return <Vue />;
    case 'vercel':
      return <Vercel />;
    case 'netlify':
      return <Netlify />;
    case 'redux':
      return <Redux />;
    case 'expo':
      return <Expo />;
    case 'material-ui':
      return <Mui />;
    case 'ant-design':
      return <Antd />;
    case 'bootstrap':
      return <Bootstrap />;
    case 'express':
      return <Express />;
    case 'mongodb':
      return <Mongo />;
    case 'mysql':
      return <Mysql />;
    case 'graphql':
      return <Graphql />;
    case 'apollo':
      return <Apollo />;
    case 'storybook':
      return <StoryBook />;
    case 'docker':
      return <Docker />;
    case 'react-native':
      return <ReactIcon />;
    case 'emotion':
      return <Emotion />;
    case 'recoil':
      return <Recoil />;
    case 'chakra-ui':
      return <Chakra />;
    case 'zustand':
      return <Zustand />;

    default:
      return null;
  }
};
