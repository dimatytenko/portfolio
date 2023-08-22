import React from 'react';

import {TAbout} from '@/types/about';
import {AboutWrapper, Title, Position, Description} from './styles';
import {Devider} from '@/app/styles';

interface IAboutComponentProps {
  data: TAbout;
}

export const AboutComponent: React.FC<IAboutComponentProps> = ({data}) => {
  return (
    <AboutWrapper>
      <Title>{data.name}</Title>
      <Devider />
      <Position>{data.position}</Position>
      <Description>{data.description}</Description>
    </AboutWrapper>
  );
};
