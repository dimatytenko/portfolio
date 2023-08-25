import React from 'react';

import {TAbout} from '@/types/about';
import {AboutWrapper, Title, Position, Description} from './styles';
import {Devider} from '@/app/[lang]/styles';
import {TDictionary} from '@/types/locale';

interface IAboutComponentProps {
  dictionary: TDictionary;
}

export const AboutComponent: React.FC<IAboutComponentProps> = ({
  dictionary,
}) => {
  return (
    <AboutWrapper>
      <Title>{dictionary['about'].name}</Title>
      <Devider />
      <Position>{dictionary['about'].position}</Position>
      <Description>{dictionary['about'].description}</Description>
    </AboutWrapper>
  );
};
