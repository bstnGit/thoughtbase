import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thought Base: Home</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="bg-background flex justify-center items-center min-h-screen">
          <Card className="w-80 lg:w-90 bg-card rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle>
                Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/auth?activeTab=login">
                  <Button className="w-full mb-2" type="submit">
                    Login
                  </Button>
              </Link>
              <Link href="/auth?activeTab=register">
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
