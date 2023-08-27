import React from 'react';
import Buttons, { ButtonProps, ButtonVariant } from "./ui/button-group";
import { Button } from "./ui/button"
import Link from "next/link";
import Logo from "./ui/logo"
import { Input } from "./ui/input"

const section_1: ButtonProps[] = [
  { label: "Announcements", variant: "link" as ButtonVariant, href: "/" },
  { label: "Github", variant: "link" as ButtonVariant, href: "/" },
  { label: "Twitter", variant: "link" as ButtonVariant, href: "/" },
];

const section_2: ButtonProps[] = [
  { label: "Contribute", variant: "link" as ButtonVariant, href: "/" },
  { label: "Request feature", variant: "link" as ButtonVariant, href: "/" },
  { label: "Report bug", variant: "link" as ButtonVariant, href: "/" },
];

const section_3: ButtonProps[] = [
  { label: "Privacy Policy", variant: "link" as ButtonVariant, href: "/" },
  { label: "Terms of Service", variant: "link" as ButtonVariant, href: "/" },
];

const Footer = () => {
  return (
    <footer className="ml-5">

      <div className="block lg:hidden">
        <Logo />
      </div>

      <div className="flex flex-wrap items-stretch">
        {/* Logo and Copyright */}
        <div className="hidden lg:block lg:w-1/6 xl:w-1/6 p-3 mr-5">
          <div className="flex flex-col justify-between h-full">
            <div>
              <Logo />
            </div>
          </div>
        </div>


        {/* About */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 p-3">
          <p className="text-sm text-primary">About Eclectic Musings</p>
          <div className="flex flex-col mt-1">
            <Buttons buttons={section_1} />
          </div>
        </div>

        {/* Involvement */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 p-3">
          <p className="text-sm text-primary">Involvement</p>
          <div className="flex flex-col mt-1">
            <Buttons buttons={section_2} />
          </div>
        </div>

        {/* Legal */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 p-3">
          <p className="text-sm text-primary">Legal</p>
          <div className="flex flex-col mt-1">
            <Buttons buttons={section_3} />
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full sm:w-full md:w-full lg:w-1/6 xl:w-1/6 p-3 min-w-[300px]">
          <p className="text-sm text-primary">Subscribe to our newsletter</p>
          <div className="flex flex-col">
            <p className="mt-2 font-thin text-secondary">Stay updated on new releases and features, guides, and case studies.</p>
            <div className="flex mt-2">
              <Input className="mr-2" type="email" placeholder="email@domain.com" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-primary mt-5">© 2023 thoughtbase, Inc.</p>
    </footer>
  );
};

export default Footer;
