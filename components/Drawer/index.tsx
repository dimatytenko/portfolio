import {DrawerProps} from 'rc-drawer';
import {StyledDrawer, NavList} from './styles';
import {NavigationItems} from '@/components/NavigationItems';

type IDrawerProps = DrawerProps & {
  onClickItem?: () => void;
};

export const Drawer: React.FC<IDrawerProps> = ({onClickItem, ...props}) => {
  return (
    <StyledDrawer {...props}>
      <NavList>
        <NavigationItems onClickItem={onClickItem} />
      </NavList>
    </StyledDrawer>
  );
};
