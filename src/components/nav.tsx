import React from 'react';
import Logo from "./ui/logo"
import { Button } from "./ui/button";
import ButtonGroup from "./ui/button-group";
import type { ButtonGroupProps, ButtonVariant } from './ui/button-group';
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ThemeDropDown } from "./ui/theme-dropdown-menu";

const Nav = () => {
  const auth: ButtonGroupProps[] = [
    { label: "Login", variant: "outline" as ButtonVariant, href:"/auth?activeTab=login" },
    { label: "Register", variant: "default" as ButtonVariant, href:"/auth?activeTab=register" },

  ]

  const pages: ButtonGroupProps[] = [
    { label: "Home", variant: "primaryLink" as ButtonVariant, href:"/" },
    { label: "About", variant: "primaryLink" as ButtonVariant, href:"/about" },
    { label: "Articles", variant: "primaryLink" as ButtonVariant, href:"/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-5">
      {/* Logo Section */}
      <div className="flex items-center">
        <Logo className="mr-10"/>
        <div className='hidden md:flex'>
          <ButtonGroup buttons={pages} className="space-x-6"/>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="relative md:hidden">
        <Sheet>
          <SheetTrigger asChild>

            <Button size="sm" variant="ghost">
              <Menu />
            </Button>

          </SheetTrigger>

          <SheetContent className="flex flex-col items-start">

            <ButtonGroup buttons={pages}/>

            <div className="flex-grow"></div>
            <div className="display-flex">
              <ButtonGroup buttons={auth} className="space-x-2"/>
              <ThemeDropDown/>
            </div>

          </SheetContent>

        </Sheet>
      </div>

      <div className="hidden md:flex items-center">
        <ButtonGroup buttons={auth} className="space-x-2"/>
        <ThemeDropDown className="ml-2"/>
      </div>

    </nav>
  );
};

export default Nav;