'use client';
import styled from 'styled-components';

import {Media} from '@/ui-kit/theme/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const StyledBody = styled.body`
  background-color: ${(props) => props.theme.palette._bg.primary};
  color: ${(props) => props.theme.palette._text.primary};
`;

export const StyledMain = styled.main`
  flex: 1 1 auto;
  padding: 40px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  padding: 0 24px;
  margin: 0 auto;

  ${Media.down.m} {
    padding: 0 16px;
  }
`;
