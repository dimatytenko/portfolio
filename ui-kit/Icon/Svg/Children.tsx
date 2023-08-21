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

    default:
      return null;
  }
};
