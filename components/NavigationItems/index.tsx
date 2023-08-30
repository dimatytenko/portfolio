import React from 'react';
import {usePathname} from 'next/navigation';

import {GET_PATH} from '@/constants/common';
import {NavItem, StyledLink} from './styles';
import {TDictionary} from '@/types/locale';
import {Locale} from '@/i18n-config';

const navItems = [
  {
    title: 'about',
    path: GET_PATH.about,
  },
  {
    title: 'projects',
    path: GET_PATH.projects,
  },
  {
    title: 'services',
    path: GET_PATH.services,
  },
];

interface INavigationItemsProps {
  onClickItem?: () => void;
  dictionary: TDictionary;
  lang: Locale;
}

export const NavigationItems: React.FC<INavigationItemsProps> = ({
  onClickItem,
  dictionary,
  lang,
}) => {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <StyledLink
          href={item.path(lang)}
          key={item.title}
          onClick={onClickItem}>
          <NavItem $isPath={pathname === item.path(lang)}>
            {dictionary['header'][item.title]}
          </NavItem>
        </StyledLink>
      ))}
    </>
  );
};
