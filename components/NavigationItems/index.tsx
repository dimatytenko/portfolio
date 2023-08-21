import React from 'react';
import {usePathname} from 'next/navigation';

import {PATHS} from '@/constants/common';
import {NavItem, StyledLink} from './styles';

const navItems = [
  {
    title: 'about',
    path: PATHS.ABOUT,
  },
  {
    title: 'projects',
    path: PATHS.PROJECTS,
  },
  {
    title: 'services',
    path: PATHS.SERVICES,
  },
];

interface INavigationItemsProps {
  onClickItem?: () => void;
}

export const NavigationItems: React.FC<INavigationItemsProps> = ({
  onClickItem,
}) => {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <StyledLink href={item.path} key={item.title} onClick={onClickItem}>
          <NavItem $isPath={pathname === item.path}>{item.title}</NavItem>
        </StyledLink>
      ))}
    </>
  );
};
