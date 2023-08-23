'use client';
import styled from 'styled-components';

import {Media} from '@/ui-kit/theme/breakpoints';

export const ServicePage = styled.section`
  height: 100%;
  padding-bottom: 40px;

  ${Media.up.m} {
    padding-top: 40px;
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
`;
