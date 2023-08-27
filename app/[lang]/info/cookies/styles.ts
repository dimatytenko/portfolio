'use client';
import styled from 'styled-components';

import {Media} from '@/ui-kit/theme/breakpoints';

export const CookiesPage = styled.div`
  padding-bottom: 40px;

  ${Media.up.m} {
    padding-top: 40px;
  }
`;

export const CookiesPageContent = styled.div``;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;
