import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Icons } from "../../../components/icons"
import { Separator } from "../../../components/ui/separator"
import { Input } from "../../../components/ui/input";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const LoginComponent = () => {

  return (
    <Card className="w-80 md:w-96 bg-card rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="w-full flex justify-center space-x-4 mb-2">
          <Button className="w-full flex items-center" variant="outline" type="button">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>

          <Button className="w-full flex items-center" variant="outline" type="button">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>

        <Separator className="mb-2" />
        <div>
          <p className="font-semibold mb-1">Email</p>
          <Input type="email" placeholder="" />
        </div>
        <div>
          <p className="font-semibold mb-1">Password</p>
          <Input type="password" placeholder="" />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-end">
        <Button className="w-full mb-2" type="submit">
          Login
        </Button>
        <Link className="link mb-12" href="../auth/forgot-password">
          Forgot password?
        </Link>

        <Separator className="mb-2" />

        <p className="description px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <Link href="../legal/terms-of-service" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="../legal/privacy-policy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'auth',
      ])),
    },
  };
}

export default LoginComponent;
