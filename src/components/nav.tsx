import React from 'react';
import Image from 'next/image'
import Logo from "./ui/logo"
import { Button } from "./ui/button";
import Buttons, {ButtonProps, ButtonVariant} from "./ui/buttons";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ThemeDropDown } from "./ui/theme-dropdown-menu";
import Link from "next/link";
import { useTheme } from 'next-themes';



const Nav = () => {
  const auth: ButtonProps[] = [
    { label: "Login", variant: "link" as ButtonVariant, href:"/auth?activeTab=login" },
    { label: "Register", variant: "default" as ButtonVariant, href:"/auth?activeTab=register" },

  ]

  const pages: ButtonProps[] = [
    { label: "Home", variant: "link" as ButtonVariant, href:"/" },
    { label: "About", variant: "link" as ButtonVariant, href:"/about" },
    { label: "Articles", variant: "link" as ButtonVariant, href:"/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-5">
      {/* Logo Section */}
      <div className="flex items-center">
        <Logo/>
        <div className='hidden md:flex'>
          <Buttons buttons={pages}/>
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
            <Buttons buttons={pages}/>
            <ThemeDropDown />
            <div className="flex-grow"></div>
            <div className="display-flex"><Buttons buttons={auth}/></div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex items-center">
        <Buttons buttons={auth}/>
        <ThemeDropDown className="ml-2"/>
      </div>

    </nav>
  );
};

export default Nav;