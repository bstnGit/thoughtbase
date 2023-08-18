import { useRouter } from "next/router"
import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/ui/theme-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
    const router = useRouter();
    const { locale, locales, push } = useRouter();

    const changeLocale = (newLocale: string) => {
      let localeVar: string = newLocale;

      if (localeVar === "system"){
        localeVar = String(router.locale ?? router.defaultLocale);
      }

      router.push(router.pathname, router.asPath, { locale: localeVar }).catch(error => {
        console.error("An error occurred:", error);
      });
    }


  return (
    <>
      <Head>
        <title>Thought Base: Home</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModeToggle />

      <DropdownMenu>
          <DropdownMenuTrigger>
            <DropdownMenuLabel></DropdownMenuLabel>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => changeLocale("system")}>System</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => changeLocale("de")}>
              Deutsch
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLocale("en")}>
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>

      <main className="bg-background flex justify-center items-center min-h-screen">
        <Card className="w-80 lg:w-90 bg-card rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle>
              Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/auth?activeTab=login" locale={ locale }>
                <Button className="w-full mb-2" type="submit">
                  Login
                </Button>
            </Link>
            <Link href="/auth?activeTab=register" locale={ locale }>
                <Button className="w-full mb-2" type="submit">
                  Sign Up
                </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
