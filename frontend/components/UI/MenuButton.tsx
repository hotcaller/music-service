import { MenuButtonProps } from '@/types';
import { Button } from '@nextui-org/button';

const MenuButton = ({ icon, iconSize, buttonStyles, tooltipText, active }: MenuButtonProps) => {
  return (
    <Button
      disableRipple={true}
      className={`mx-auto ${active ? 'menu_button-active' : 'menu_button'} rounded-xl`}
      size="lg"
      isIconOnly
      aria-label={tooltipText}
    >
      <span
        className={`${icon} ${active ? 'menu_button-icon__active' : 'menu_button-icon'}`}
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      ></span>
    </Button>
  );
};

export default MenuButton;
