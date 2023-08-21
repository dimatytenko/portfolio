'use client';
import styled from 'styled-components';
import Link from 'next/link';

import {IconSvg} from '@/ui-kit/Icon/Svg';
import {Media} from '@/ui-kit/theme/breakpoints';

export const StyledHeader = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 180px;

  ${Media.down.l} {
    gap: 100px;
  }

  ${Media.down.m} {
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  position: relative;
  z-index: 9999;
`;

export const LogoIcon = styled(IconSvg).attrs({
  type: 'logo',
  fill: 'primary',
  width: '67px',
  height: '67px',
  viewBox: '0 0 49 49',
})`
  transition: fill ${({theme}) => theme.transition.primary};

  &:hover,
  &:focus {
    fill: ${({theme}) => theme.palette._text.primary};
  }
`;

export const Nav = styled.nav``;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  ${Media.down.l} {
    gap: 40px;
  }
`;

export const Menu = styled.div`
  position: relative;
  z-index: 9999;
`;

// Footer
export const StyledFooter = styled.footer`
  padding-bottom: 40px;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${Media.down.s} {
    flex-direction: column-reverse;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${Media.up.s} {
    height: 240px;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background-color: ${({theme}) => theme.palette._bg.tertiary};
    }
  }

  ${Media.up.xxl} {
    height: 120px;
  }
`;

export const SocialIconWrapper = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 67px;
  background-color: ${({theme}) => theme.palette._bg.secondary};
  border-radius: 50%;

  &:hover,
  &:focus {
    svg {
      fill: ${({theme}) => theme.palette._text.primary};
    }
  }
`;

export const SocialIcon = styled(IconSvg).attrs({
  fill: 'primary',
  stroke: 'primary',
})`
  display: block;
  width: 40px;
  height: 40px;
  transition: fill ${({theme}) => theme.transition.primary};
`;

export const TextBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover p,
  &:focus p {
    color: ${({theme}) => theme.palette._text.primary};
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  ${Media.down.s} {
    gap: 20px;
  }
`;

export const FooterText = styled.p`
  color: ${({theme}) => theme.palette._text.secondary};
  font-size: 20px;
  transition: color ${({theme}) => theme.transition.primary};

  ${Media.down.s} {
    font-size: 18px;
  }
`;

export const FooterLink = styled.a`
  ${Media.down.xxl} {
    order: 1;
  }
`;

export const ArrowIcon = styled(IconSvg).attrs({
  type: 'arrowFooter',
  width: '350',
  height: '110',
  viewBox: '0 0 548 110',
  stroke: 'tertiary',
  fill: 'none',
})`
  ${Media.down.xxl} {
    order: 0;
  }

  ${Media.down.s} {
    width: 80vw;
  }
`;
