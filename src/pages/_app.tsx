import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";
import Layout from "../components/layout"
import { Analytics } from '@vercel/analytics/react';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
            <Analytics />
            <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  );
};

export default api.withTRPC(MyApp);