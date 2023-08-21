'use client';
import styled from 'styled-components';
import Link from 'next/link';

export const NavItem = styled.div<{$isPath?: boolean}>`
  color: ${({theme}) => theme.palette._text.secondary};
  text-transform: capitalize;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid
    ${({theme, $isPath}) =>
      $isPath ? theme.palette._text.primary : 'transparent'};
  transition: color, border-color ${({theme}) => theme.transition.primary};

  &:hover,
  &:focus {
    color: ${({theme}) => theme.palette._text.primary};
    border-color: ${({theme}) => theme.palette._text.primary};
  }
`;

export const StyledLink = styled(Link)``;
