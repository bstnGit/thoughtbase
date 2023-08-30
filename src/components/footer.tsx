import React from 'react';
import ButtonGroup from "./ui/button-group";
import type { ButtonGroupProps, ButtonVariant } from "./ui/button-group";
import { Button } from "./ui/button"
import Logo from "./ui/logo"
import { Input } from "./ui/input"

const createButton = (label: string): ButtonGroupProps => ({
  label,
  variant: "link",
  href: "/"
});

const section_1: ButtonGroupProps[] = [
  createButton("Announcements"),
  createButton("Github"),
  createButton("Twitter")
];

const section_2: ButtonGroupProps[] = [
  createButton("Contribute"),
  createButton("Request feature"),
  createButton("Report bug")
];

const section_3: ButtonGroupProps[] = [
  createButton("Privacy Policy"),
  createButton("Terms of Service")
];

const Footer = () => {
  return (
    <footer className="ml-5 mb-5">
      <div className="block lg:hidden">
        <Logo />
      </div>

      <div className="flex flex-wrap items-stretch">
        <div className="hidden lg:block lg:w-1/6 xl:w-1/6 p-3 mr-5">
          <div className="flex flex-col justify-between h-full">
            <div>
              <Logo />
            </div>
          </div>
        </div>
        <FooterSection title="About Eclectic Musings" buttons={section_1} />
        <FooterSection title="Involvement" buttons={section_2} />
        <FooterSection title="Legal" buttons={section_3} />
        <FooterNewsletter />
      </div>

      <p className="mt-5">© 2023 thoughtbase, Inc.</p>
    </footer>
  );
};


const FooterSection = ({ title, buttons }: { title: string; buttons: ButtonGroupProps[] }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 p-3">
      <h5 className="whitespace-nowrap">{title}</h5>
      <ButtonGroup buttons={buttons} className="flex flex-col mt-1" />
    </div>
  );
};

const FooterNewsletter = () => {
  return (
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
  );
};


export default Footer;
