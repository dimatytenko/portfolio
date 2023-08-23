import React from 'react';

import {
  ServiceWrapper,
  StyledIcon,
  ServiceFooter,
  ServiceTitle,
  ServiceLabel,
  ServiceIsUse,
} from './styles';
import {TService} from '@/types/services';
import {icon} from '@/ui-kit/Icon/Svg/types';
import {TDictionary} from '@/types/locale';

interface IServiceProps {
  data: TService;
  dictionary: TDictionary;
}

export const Service: React.FC<IServiceProps> = ({data, dictionary}) => {
  return (
    <ServiceWrapper>
      <ServiceIsUse $isUse={data.is}>
        {data.is
          ? dictionary['services'].use
          : dictionary['services'].inProgres}
      </ServiceIsUse>
      <StyledIcon
        type={data.tag as icon}
        viewBox={data?.viewBox || '0 0 140 140'}
      />
      <ServiceFooter>
        <ServiceTitle>{data.name}</ServiceTitle>
        <ServiceLabel>{data.service}</ServiceLabel>
      </ServiceFooter>
    </ServiceWrapper>
  );
};
