'use client';
import styled from 'styled-components';

import {scrollStyles} from '@/ui-kit/theme/scroll';
import {Media} from '@/ui-kit/theme/breakpoints';

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 550px;
  height: 700px;
  border-radius: 50px 0px;
  background: ${({theme}) => theme.palette._bg.dark};
  box-shadow: 0px 0px 12px 0px ${({theme}) => theme.palette._bg.secondary};
  padding: 25px 25px 45px;

  ${Media.down.s} {
    height: 790px;
  }
`;

export const ProjectImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const ProjectContent = styled.div`
  ${scrollStyles}
  position: absolute;
  top: 300px;
  left: 0;
  height: 255px;
  padding: 25px;
  border-radius: 50px 0px 0px 0px;
  overflow: hidden;
  background: ${({theme}) => theme.palette._bg.dark};
  transition: all ${({theme}) => theme.transition.primary};

  &:hover,
  &:focus {
    top: 0;
    box-shadow: 0px 0px 12px 0px ${({theme}) => theme.palette._bg.secondary};
    width: 100%;
    height: 563px;
    z-index: 10;
    overflow: auto;
  }
`;

export const ProjectTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const ProjectTag = styled.p`
  font-size: 28px;
  font-weight: 600;
  background: ${({theme}) => theme.palette._text.modifier};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProjectDescription = styled.p`
  font-size: 24px;
  line-height: 1.2;
`;

export const ProjectButtons = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  & > a {
    width: 48%;
  }

  ${Media.down.s} {
    flex-direction: column;
    & > a {
      width: 100%;
      margin-top: unset;
    }
  }
`;

export const ProjectTeamWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
