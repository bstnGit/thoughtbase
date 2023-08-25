import Head from "next/head";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Login from '../components/login';
import Register from '../components/register';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export default function Authentication() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize activeTab based on the query parameter
  const initialActiveTab = searchParams.get("activeTab") as "login" | "register";
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialActiveTab || "login");

  // Function to handle tab change
  const handleTabChange = (tab: "login" | "register") => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      router.push({
        pathname: "/auth",
        query: { activeTab: tab }
      }).catch(error => {
        console.error("An error occurred:", error);
      });
    }
  };

  // Update activeTab when the query parameter changes
  useEffect(() => {
    const newActiveTab = searchParams.get("activeTab") as "login" | "register";
    if (newActiveTab) {
      setActiveTab(newActiveTab);
    }
  }, [searchParams]);

  return (
    <>
      <Head>
        <title>{activeTab === "login" ? "Login" : "Register"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background flex justify-center items-center min-h-screen">
        <Tabs value={activeTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" onClick={() => handleTabChange("login")}>Login</TabsTrigger>
            <TabsTrigger value="register" onClick={() => handleTabChange("register")}>Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Login />
          </TabsContent>

          <TabsContent value="register">
            <Register />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
