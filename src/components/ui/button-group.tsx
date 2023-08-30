import React from 'react';
import Link from 'next/link';
import { Button } from './button';

export type ButtonVariant = "link" | "primaryLink" | "outline" | "default";

export interface ButtonGroupProps {
  href: string;
  variant: ButtonVariant;
  label: string;
  className?: string;
}

const ButtonGroup: React.FC<{ className?: string, buttons: ButtonGroupProps[] }> = ({ className, buttons }) => {
  return (
    <div className={className}>
      {buttons.map((button, index) => (
        <Link href={button.href} key={index}>
          <Button
            key={index}
            size={(button.variant === "link" || button.variant === "primaryLink") ? "none" : "default"}
            variant={button.variant}
            className={button.className}
          >
            {button.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonGroup;
