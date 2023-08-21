import React from 'react';

import {StyledSvg} from './styles';
import {SvgChildren} from './Children';
import {StyledSvgIconProps} from './types';

export const IconSvg: React.FC<StyledSvgIconProps> = ({
  className,
  type,
  width,
  stroke,
  fillChildren,
  height,
  fill,
  viewBox,
  strokeWidth,
}) => {
  if (!type) return null;

  return (
    <StyledSvg
      className={className}
      width={width || '30'}
      height={height || '30'}
      stroke={stroke}
      viewBox={viewBox || '0 0 24 24'}
      strokeWidth={strokeWidth}
      fill={fill}>
      <SvgChildren fillChildren={fillChildren} type={type} />
    </StyledSvg>
  );
};
