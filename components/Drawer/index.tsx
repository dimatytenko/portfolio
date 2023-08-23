'use client';

import {DrawerProps} from 'rc-drawer';
import {StyledDrawer, NavList} from './styles';
import {NavigationItems} from '@/components/NavigationItems';
import {TDictionary} from '@/types/locale';
import {Locale} from '@/i18n-config';
import LocaleSwitcher from '@/components/LocaleSwitcher';

type IDrawerProps = DrawerProps & {
  onClickItem?: () => void;
  dictionary: TDictionary;
  lang: Locale;
};

export const Drawer: React.FC<IDrawerProps> = ({
  onClickItem,
  dictionary,
  lang,
  ...props
}) => {
  return (
    <StyledDrawer {...props}>
      <NavList>
        <NavigationItems
          onClickItem={onClickItem}
          dictionary={dictionary}
          lang={lang}
        />
        <LocaleSwitcher />
      </NavList>
    </StyledDrawer>
  );
};
