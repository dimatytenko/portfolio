export const colorOptions = <const>['primary', 'secondary', 'tertiary', 'blue'];
export type color = (typeof colorOptions)[number];

export const iconOptions = <const>[
  'github',
  'linkedin',
  'arrowFooter',
  'logo',
  'cv',
  'decor1',
  'cursor',
  'toolbox',
  'check',
  'html',
  'css',
  'sass',
  'styled-components',
  'emotion',
  'tailwind',
  'js',
  'typescript',
  'figma',
  'vscode',
  'git',
  'git-hub',
  'gitlab',
  'react',
  'node',
  'next',
  'gatsby',
  'vue',
  'react-native',
  'vercel',
  'netlify',
  'redux',
  'recoil',
  'zustand',
  'expo',
  'material-ui',
  'ant-design',
  'chakra-ui',
  'bootstrap',
  'express',
  'mongodb',
  'mysql',
  'graphql',
  'apollo',
  'storybook',
  'docker',
];
export type icon = (typeof iconOptions)[number];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fill?: color | 'none';
  fillChildren?: color | 'none';
  stroke?: color;
  strokeWidth?: number;
  viewBox?: string;
}
