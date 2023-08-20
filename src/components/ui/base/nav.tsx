import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../button";
import { Icons } from "../../icons";
import { X, Menu } from "lucide-react"

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className={`relative md:hidden`}>
        {showMenu && (
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
        )}
        <div className={`fixed inset-y-0 right-0 w-2/3 bg-background p-4 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
          <div className="flex flex-col space-y-1 items-start">
            <Button variant="link">Home</Button>
            <Button variant="link">About</Button>
            <Button variant="link">Blog</Button>
            <Button variant="outline">Contact</Button>
          </div>
        </div>
        <Button size="sm" variant="link" onClick={toggleMenu}>
          {showMenu ? <X/> : <Menu/>}
        </Button>
      </div>
      <div className="hidden md:flex justify-end space-x-2">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Blog</Button>
        <Button variant="outline">Contact</Button>
      </div>
    </nav>
  );
};

export default Nav;
