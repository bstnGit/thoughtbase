import React from 'react';
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto">
        <div className="w-full pr-8">
          <h2 className="text-lg font-semibold mb-2 text-primary">
            Legal
          </h2>
          <div className="flex flex-col space-y-1">
            <Link href="/legal/privacy-policy">
              <Button variant="link">
                Privacy Policy
              </Button>
            </Link>

            <Link href="/legal/terms-of-service">
              <Button variant="link" >
                Terms of Service
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
