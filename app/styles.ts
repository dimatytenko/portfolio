'use client';
import styled from 'styled-components';

import {Media} from '@/ui-kit/theme/breakpoints';
import {IconSvg} from '@/ui-kit/Icon/Svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const StyledBody = styled.body`
  background-color: ${({theme}) => theme.palette._bg.primary};
  color: ${({theme}) => theme.palette._text.primary};
  font-size: 36px;
  line-height: 1;
`;

export const StyledMain = styled.main`
  flex: 1 1 auto;
  padding: 40px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  padding: 0 24px;
  margin: 0 auto;

  ${Media.down.m} {
    padding: 0 16px;
  }
`;

export const MobileWrapper = styled.div`
  ${Media.up.m} {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  ${Media.down.m} {
    display: none;
  }
`;

// Home
export const HomeWrapper = styled.section``;

export const HomeContent = styled.div`
  display: flex;
  gap: 40px;

  ${Media.down.xl} {
    flex-direction: column-reverse;
  }
`;

export const LeftSide = styled.div`
  max-width: 565px;

  ${Media.down.xl} {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(40px, 8vw, 90px);
  font-weight: 700;
  margin-bottom: 40px;
`;

export const TitleModifyre = styled.span`
  background: ${({theme}) => theme.palette._text.modifier};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.h2`
  max-width: 643px;
  font-size: 24px;
  margin-bottom: 60px;
  color: ${({theme}) => theme.palette._text.tertiary};
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 56px;
  border-radius: 40px;
  background: ${({theme}) => theme.palette._bg.button};
  color: ${({theme}) => theme.palette._text.primary};
  text-transform: uppercase;
  font-size: 24px;
  opacity: 1;
  transition: opacity, ${({theme}) => theme.transition.primary};

  &:hover {
    opacity: 0.8;
  }

  ${Media.down.m} {
    margin-top: 40px;
    width: 100%;
  }
`;

export const CvIcon = styled(IconSvg).attrs({
  type: 'cv',
  width: '40',
  height: '40',
  fill: 'primary',
})``;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  ${Media.down.xl} {
    min-height: 500px;
    justify-content: space-around;
  }
`;

export const Decor = styled.div<{$isEnd?: boolean}>`
  position: relative;
  align-self: ${({$isEnd}) => ($isEnd ? 'flex-end' : 'flex-start')};
  width: 350px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 190px 218px 20px 20px;
  background: ${({$isEnd, theme}) =>
    $isEnd ? theme.palette._bg.decor1 : theme.palette._bg.decor2};

  ${Media.down.xs} {
    width: 250px;
    height: 280px;
  }
`;

export const DecorIcon = styled(IconSvg).attrs({
  type: 'decor1',
  width: '198px',
  height: '151px',
  viewBox: '0 0 198 151',
  fill: 'none',
})`
  position: absolute;
  top: 0;
  right: 120px;

  ${Media.down.m} {
    right: 30px;
  }
`;

export const CursorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -100px;

  ${Media.down.m} {
    top: -80px;
    left: 0;
  }
`;

export const CursorIcon = styled(IconSvg).attrs({
  type: 'cursor',
  width: '70',
  height: '80',
  fill: 'blue',
})``;

export const CursorDecor = styled.div`
  background-color: ${({theme}) => theme.palette._bg.blue};
  padding: 10px 34px;
  font-weight: 600;
  color: ${({theme}) => theme.palette._text.black};
  text-transform: capitalize;
  font-size: 16px;
`;

export const ToolboxWrapper = styled.div`
  position: absolute;
  left: 25%;
  bottom: -170px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: ${({theme}) => theme.palette._text.tertiary};
  border-radius: 50%;

  ${Media.down.m} {
    left: unset;
    bottom: unset;
    right: -100px;
    top: -60px;
  }

  ${Media.down.s} {
    right: 30px;
    top: -30px;
  }
`;

export const ToolboxIcon = styled(IconSvg).attrs({
  type: 'toolbox',
  width: '70',
  height: '80',
  viewBox: '0 0 16 16',
  stroke: 'primary',
  fill: 'secondary',
})``;

export const CheckWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.palette._bg.green};
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const CheckIcon = styled(IconSvg).attrs({
  type: 'check',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  stroke: 'primary',
})`
  display: block;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: -110px;
  bottom: 0;

  & > img {
    width: 376px;
    height: 364px;
  }

  ${Media.down.s} {
    right: -40px;
    & > img {
      width: 286px;
      height: 274px;
    }
  }
`;