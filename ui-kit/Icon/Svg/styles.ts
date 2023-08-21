'use client';
// @ts-ignore
import styled, {css, StyledProps} from 'styled-components';
import {StyledSvgIconProps} from './types';

const getColor = ({
  theme,
  color,
  defaultColor,
}: {
  theme: any;
  color?: string;
  defaultColor: string;
}) => {
  switch (color) {
    case 'primary':
      return theme.palette._bg.primary;
    case 'secondary':
      return theme.palette._bg.secondary;
    case 'tertiary':
      return theme.palette._bg.tertiary;
    case 'blue':
      return theme.palette._bg.blue;

    case 'none':
      return 'none';
    default:
      return defaultColor;
  }
};

const stroke = ({theme, stroke}: StyledProps<StyledSvgIconProps>) => {
  return getColor({
    theme,
    color: stroke,
    defaultColor: theme.palette._text.secondary,
  });
};

export const fill = ({theme, fill}: StyledProps<StyledSvgIconProps>) => {
  return getColor({
    theme,
    color: fill,
    defaultColor: theme.palette._text.secondary,
  });
};

export const StyledSvg = styled.svg`
  & > * {
    stroke: ${stroke};
  }
  & > path {
    ${({strokeWidth}) =>
      strokeWidth &&
      css`
        stroke-width: ${strokeWidth};
      `};
  }
  fill: ${fill};
`;

export const StyledPath = styled.path`
  fill: ${fill};
  stroke: ${stroke};
`;
