'use client';
import styled from 'styled-components';

import {IconSvg} from '@/ui-kit/Icon/Svg';
import {Media} from '@/ui-kit/theme/breakpoints';

export const ServiceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  width: 330px;
  height: 300px;
  padding: 24px;

  border-radius: 22px;
  border: 1px solid ${({theme}) => theme.palette._bg.tertiary};
  background: ${({theme}) => theme.palette._bg.dark};

  ${Media.down.m} {
    width: 288px;
  }
`;

export const StyledIcon = styled(IconSvg).attrs({
  width: '140px',
  height: '140px',
  fill: 'none',
  stroke: 'secondary',
})``;

export const ServiceFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ServiceTitle = styled.h3`
  font-size: 18px;
`;

export const ServiceLabel = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  border: 1px solid ${({theme}) => theme.palette._bg.tertiary};
  background: ${({theme}) => theme.palette._bg.dark};
  font-size: 14px;
`;

export const ServiceIsUse = styled.div<{$isUse: boolean}>`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  border: 1px solid ${({theme}) => theme.palette._bg.tertiary};
  background: ${({theme}) => theme.palette._bg.dark};
  font-size: 14px;
  background: ${({theme, $isUse}) =>
    $isUse ? theme.palette._text.modifier : theme.palette._bg.linear_1};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
