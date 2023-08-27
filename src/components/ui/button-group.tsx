import Link from 'next/link';
import { Button } from './button';
export type ButtonVariant = "link" | "outline" | "default";

export interface ButtonGroupProps {
  href: string;
  variant: ButtonVariant;
  label: string;
}

const ButtonGroup: React.FC<{ buttons: ButtonGroupProps[] }> = ({ buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Link href={button.href} key={index}>
          <Button
            key={index}
            size={button.variant === "link" ? "none" : "default"}
            variant={button.variant}
            className={
              (index !== buttons.length - 1 ? "mr-2 " : "") +
              (button.variant === "link" ? "mr-5" : "")
            }>
            {button.label}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default ButtonGroup;
