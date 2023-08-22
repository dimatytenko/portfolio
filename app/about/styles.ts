'use client';
import styled from 'styled-components';

import {Media} from '@/ui-kit/theme/breakpoints';

export const AboutPage = styled.section`
  height: 100%;
  padding-bottom: 40px;

  ${Media.up.m} {
    padding-top: 40px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${Media.down.s} {
    flex-direction: column;
  }
`;

export const AvatarWrapper = styled.div``;
