import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";
import Layout from "../components/layout"
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Layout>
            <Analytics />

            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <main>
              <Component {...pageProps} />
            </main>
      </Layout>
    </ThemeProvider>

  );
};

export default api.withTRPC(MyApp);