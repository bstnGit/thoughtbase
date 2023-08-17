import { type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import { ThemeProvider } from "../ui/components/themeprovider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
