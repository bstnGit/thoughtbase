import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";
import Layout from "../components/layout"
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
            <Analytics />
            <main className={ inter.className }>
              <Component {...pageProps} />
            </main>
      </Layout>
    </ThemeProvider>

  );
};

export default api.withTRPC(MyApp);