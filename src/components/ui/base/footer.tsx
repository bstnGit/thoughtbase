import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card"

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3 pr-8">
          <Card>
            <CardHeader>
              <CardTitle>About Us</CardTitle>
              <CardDescription>We are a dedicated blogging platform providing insightful articles on various topics.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-1/3 pr-8">
          <Card>
            <CardHeader>
              <CardTitle>Legal</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li><a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a></li>
                <li><a href="/terms-of-use" className="text-white hover:underline">Terms of Use</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you have any questions, feel free to reach out to us at <a href="mailto:contact@example.com" className="text-white underline">contact@example.com</a>.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
