import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ui/themeprovider";
import { appWithTranslation } from 'next-i18next';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default api.withTRPC(appWithTranslation(MyApp));