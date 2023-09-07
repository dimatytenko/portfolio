'use client';
import styled from 'styled-components';
import Link from 'next/link';

import {IconSvg} from '@/ui-kit/Icon/Svg';
import {Media} from '@/ui-kit/theme/breakpoints';

export const Wrapper = styled.div<{$isNotFound?: boolean}>`
  background-image: ${({$isNotFound}) =>
    $isNotFound && 'url(/img/static/not_found_bg.webp)'};
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto 100%;
  background-color: ${({theme}) => theme.palette._bg.primary};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const StyledMain = styled.main`
  flex: 1 1 auto;
`;

export const StyledHeader = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  position: relative;
  z-index: 9990;
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
    gap: 20px;
  }
`;

export const Menu = styled.div`
  position: relative;
  z-index: 9990;
`;

export const ElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
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

export const TextBlockWrapper = styled.div<{color: string}>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover p,
  &:focus p {
    color: ${({theme}) => theme.palette._text.primary};
  }

  &:hover p::before {
    width: 100%;
    filter: drop-shadow(0 0 25px ${({color}) => color});
  }
`;

export const FooterLinksWrapper = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  ${Media.down.s} {
    gap: 20px;
  }
`;

export const FooterText = styled.p<{color: string}>`
  color: ${({theme}) => theme.palette._text.secondary};
  font-size: 20px;
  transition: color ${({theme}) => theme.transition.primary};

  ${Media.down.s} {
    font-size: 18px;
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    color: ${({color}) => color};
    width: 0;
    overflow: hidden;
    transition: 1s;
    // border-right: 8px solid #00ade1;
    // -webkit-text-stroke: 1px #00ade1;
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
