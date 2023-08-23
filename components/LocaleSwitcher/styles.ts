'use client';

import styled from 'styled-components';

export const Wrapper = styled.div``;

export const List = styled.ul``;

export const Item = styled.li<{$isPath?: boolean}>`
  color: ${({theme}) => theme.palette._text.secondary};
  text-transform: capitalize;
  padding: 4px;
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

  & + & {
    margin-top: 2px;
  }
}`;
