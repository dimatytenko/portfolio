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
