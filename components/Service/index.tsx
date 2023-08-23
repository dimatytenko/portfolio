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

interface IServiceProps {
  data: TService;
}

export const Service: React.FC<IServiceProps> = ({data}) => {
  return (
    <ServiceWrapper>
      <ServiceIsUse $isUse={data.is}>
        {data.is ? 'Use' : 'In progress'}
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
