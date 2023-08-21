import React from 'react';
import { Button } from "../button";
import { Sheet, SheetTrigger, SheetContent } from "../sheet";
import { Menu } from "lucide-react";
import { ThemeDropDown } from "../theme-dropdown-menu";
import Link from "next/link";

type ButtonVariant = "link" | "outline";


const Nav = () => {
  const buttons = [
    { label: "Home", variant: "link" as ButtonVariant, href:"" },
    { label: "About", variant: "link" as ButtonVariant, href:""  },
    { label: "Contact", variant: "link" as ButtonVariant, href:""  },
    { label: "Articles", variant: "outline" as ButtonVariant, href:"/article/"  },
  ];

  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Link href={ button.href } key={index}>
        <Button
          key={index}
          variant={button.variant}
          className={index !== buttons.length - 1 ? "mr-2" : ""} >
          {button.label}
        </Button>
      </Link>
    ));
  };

  return (
    <nav>
      <div className="relative md:hidden flex justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" variant="ghost" className="mr-5">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            {renderButtons()}
            <ThemeDropDown />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex justify-end mr-5">
        {renderButtons()}
        <ThemeDropDown className="ml-2"/>
      </div>
    </nav>
  );
};

export default Nav;
