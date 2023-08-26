'use client';

import styled from 'styled-components';

import {Media} from '@/ui-kit/theme/breakpoints';

export const StyledCookieBanner = styled.div`
  position: fixed;
  left: 50%;
  top: 10px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  padding: 12px 16px;
  background: ${({theme}) => theme.palette._bg.dark};
  border-radius: 16px;
`;

export const SubTitle = styled.h2`
  max-width: 643px;
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.palette._text.tertiary};
  line-height: 1.2;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  ${Media.down.m} {
    flex-direction: column;
  }
`;
