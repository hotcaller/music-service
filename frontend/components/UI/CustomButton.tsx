import { Button } from "@nextui-org/button";
import { PressEvent } from "@react-types/shared";

interface CustomButtonProps {
  onClick?: (e: PressEvent) => void;
  ariaLabel?: string;
  children: React.ReactNode;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({ onClick, ariaLabel, children }) => {
  return (
    <Button
      variant="light"
      aria-label={ariaLabel}
      isIconOnly
      disableRipple
      onPress={onClick}
      style={{
        backgroundColor: 'white',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;