'use client';
import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${({theme}) => theme.palette._bg.linear_3};
  margin-right: 20px;
  overflow: hidden;
`;
