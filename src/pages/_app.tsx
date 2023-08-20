import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ui/themeprovider";
import Layout from "../components/ui/base/layout"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
            <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  );
};

export default api.withTRPC(MyApp);